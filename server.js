/**
 * Horologium Production Server Entrypoint
 */
import 'dotenv/config';
import { app } from './server/app.js';

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || '0.0.0.0';

const server = app.listen(PORT, HOST, () => {
  console.info(`========================================================`);
  console.info(`   HOROLOGIUM // CORE TELEMETRY SERVER ONLINE           `);
  console.info(`   PORT: ${PORT}                                       `);
  console.info(`   HEALTH CHECK: http://localhost:${PORT}/api/health    `);
  console.info(`========================================================`);
});

process.on('SIGTERM', () => {
  console.info('[Horologium] SIGTERM received. Shutting down gracefully.');
  server.close(() => process.exit(0));
});
