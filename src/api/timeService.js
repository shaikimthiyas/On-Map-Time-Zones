/**
 * Horologium Time Service
 * Orchestrates external atomic API verification with native Intl.DateTimeFormat fallbacks
 */
import { ENV } from '../config/env.js';
import { fetchWithTimeout } from './httpClient.js';
import { getCountryLiveTime } from '../data/countries.data.js';

let lastCallTimestamp = 0;
const MIN_API_CALL_INTERVAL_MS = 1500;

export class TimeService {
  /**
   * Resolve live time for any country or timezone
   * Always returns valid time data through client-side IANA engine,
   * while optionally verifying against atomic time REST services in background.
   */
  static getLiveTime(countryName, customDate = null, is24h = true) {
    return getCountryLiveTime(countryName, customDate, is24h);
  }

  /**
   * Background verification against external REST API
   * Rate-limited to at most 1 call per 1.5s to avoid 429 quota exhaustion.
   */
  static async verifyWithRemoteApi(countryName) {
    const now = Date.now();
    if (now - lastCallTimestamp < MIN_API_CALL_INTERVAL_MS) {
      return null;
    }
    lastCallTimestamp = now;

    try {
      // 1. Try secure server-side proxy
      const proxyUrl = `/api/time?location=${encodeURIComponent(countryName)}`;
      const res = await fetchWithTimeout(proxyUrl, {}, 3000);

      if (res.ok) {
        const data = await res.json();
        return {
          datetime: data.datetime,
          timezone: data.timezone,
          abbreviation: data.abbreviation,
          offset: data.offset,
          source: data.source || 'server_proxy'
        };
      }
    } catch (err) {
      // Network or offline fallback
    }

    return null;
  }

  fetchTime(location = 'UTC') {
    return TimeService.verifyWithRemoteApi(location);
  }
}

export const timeService = new TimeService();
