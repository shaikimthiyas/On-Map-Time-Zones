/**
 * Lightweight In-Memory Sliding Window Rate Limiter
 */
const requestBuckets = new Map();

export function createRateLimiter({ windowMs = 60 * 1000, maxRequests = 60, message = 'Rate limit exceeded. Try again later.' } = {}) {
  return (req, res, next) => {
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || '127.0.0.1';
    const now = Date.now();

    let bucket = requestBuckets.get(ip);
    if (!bucket || now - bucket.windowStart > windowMs) {
      bucket = { windowStart: now, count: 1 };
      requestBuckets.set(ip, bucket);
      return next();
    }

    bucket.count += 1;
    if (bucket.count > maxRequests) {
      return res.status(429).json({
        success: false,
        error: message,
        retryAfterSeconds: Math.ceil((bucket.windowStart + windowMs - now) / 1000)
      });
    }

    next();
  };
}
