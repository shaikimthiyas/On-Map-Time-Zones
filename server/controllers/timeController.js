/**
 * Horologium Time Controller
 * Server-side time verification proxy with in-memory TTL caching
 */
const timeCache = new Map();
const CACHE_TTL_MS = 60 * 1000; // 60 seconds

export async function getTime(req, res) {
  const location = req.query.location || 'UTC';
  const cacheKey = location.trim().toLowerCase();

  // 1. Check in-memory cache
  const cached = timeCache.get(cacheKey);
  if (cached && Date.now() - cached.timestamp < CACHE_TTL_MS) {
    return res.json({
      ...cached.data,
      cached: true
    });
  }

  const apiKey = process.env.VITE_TIME_API_KEY || process.env.TIME_API_KEY;
  const baseUrl = process.env.VITE_TIME_API_BASE_URL || process.env.TIME_API_BASE_URL || 'https://timezone.abstractapi.com/v1/current_time';

  if (!apiKey) {
    // Return computed server-side Intl time
    return res.json(computeLocalIntlTime(location));
  }

  try {
    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 3500);

    const targetUrl = `${baseUrl}?api_key=${apiKey}&location=${encodeURIComponent(location)}`;
    const remoteRes = await fetch(targetUrl, { signal: controller.signal });
    clearTimeout(timeout);

    if (remoteRes.ok) {
      const data = await remoteRes.json();
      const payload = {
        datetime: data.datetime,
        timezone: data.timezone_name,
        abbreviation: data.timezone_abbreviation,
        offset: data.gmt_offset,
        source: 'abstract_api'
      };

      timeCache.set(cacheKey, { timestamp: Date.now(), data: payload });
      return res.json({ ...payload, cached: false });
    }
  } catch (err) {
    // Network or timeout failure - fallback smoothly
  }

  // Graceful server-side fallback
  const fallback = computeLocalIntlTime(location);
  timeCache.set(cacheKey, { timestamp: Date.now(), data: fallback });
  return res.json({ ...fallback, cached: false });
}

function computeLocalIntlTime(tzOrCountry) {
  const now = new Date();
  let timeZone = 'UTC';

  try {
    // Check if valid IANA timezone
    new Intl.DateTimeFormat('en-US', { timeZone: tzOrCountry }).format(now);
    timeZone = tzOrCountry;
  } catch (e) {
    timeZone = 'UTC';
  }

  const formatter = new Intl.DateTimeFormat('en-US', {
    timeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  });

  return {
    datetime: formatter.format(now),
    timezone: timeZone,
    abbreviation: 'INTL',
    offset: 0,
    source: 'server_intl_engine'
  };
}
