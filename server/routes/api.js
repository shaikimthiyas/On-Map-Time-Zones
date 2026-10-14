/**
 * Horologium Central REST API Router
 */
import { Router } from 'express';
import { getTime } from '../controllers/timeController.js';
import { login, getMe, logout } from '../controllers/authController.js';
import { getPins, addPin, deletePin } from '../controllers/pinsController.js';
import { createTransmission, getTransmissions } from '../controllers/inquiryController.js';
import { requireOperatorAuth } from '../middleware/authMiddleware.js';
import { createRateLimiter } from '../middleware/rateLimiter.js';
import { db } from '../db/database.js';

export const apiRouter = Router();

// General API rate limiter (120 req / minute)
const generalLimiter = createRateLimiter({ windowMs: 60 * 1000, maxRequests: 120 });
// Transmission submit limiter (5 req / 5 minutes)
const transmissionLimiter = createRateLimiter({ windowMs: 5 * 60 * 1000, maxRequests: 5, message: 'Too many transmissions sent from this terminal. Please wait.' });

apiRouter.use(generalLimiter);

/**
 * Health Check & System Telemetry
 */
apiRouter.get('/health', (req, res) => {
  let dbStatus = 'connected';
  try {
    db.prepare('SELECT 1').get();
  } catch (e) {
    dbStatus = 'error';
  }

  res.json({
    status: 'ONLINE',
    subsystem: 'Horologium Core API',
    uptimeSeconds: Math.floor(process.uptime()),
    serverTimeUtc: new Date().toISOString(),
    nodeVersion: process.version,
    database: {
      type: 'SQLite (node:sqlite)',
      status: dbStatus
    }
  });
});

/**
 * Time Verification Proxy
 */
apiRouter.get('/time', getTime);

/**
 * Operator Authentication
 */
apiRouter.post('/auth/login', login);
apiRouter.get('/auth/me', getMe);
apiRouter.post('/auth/logout', logout);

/**
 * Pinned Telemetry Stations
 */
apiRouter.get('/pins', getPins);
apiRouter.post('/pins', requireOperatorAuth, addPin);
apiRouter.delete('/pins/:id', requireOperatorAuth, deletePin);

/**
 * Transmissions & Inquiries
 */
apiRouter.post('/transmissions', transmissionLimiter, createTransmission);
apiRouter.get('/transmissions', requireOperatorAuth, getTransmissions);
