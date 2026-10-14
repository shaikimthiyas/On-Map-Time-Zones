/**
 * Safe Environment Configuration Loader
 * Reads from Vite's import.meta.env with resilient fallbacks
 */
export const ENV = {
  APP_NAME: import.meta.env?.VITE_APP_NAME || 'Horologium',
  APP_TAGLINE: import.meta.env?.VITE_APP_TAGLINE || 'Global Temporal & Meridian Telemetry System',
  TIME_API_BASE_URL: import.meta.env?.VITE_TIME_API_BASE_URL || 'https://timezone.abstractapi.com/v1/current_time/',
  TIME_API_KEY: import.meta.env?.VITE_TIME_API_KEY || '',
  ENABLE_FALLBACK_INTL: import.meta.env?.VITE_ENABLE_FALLBACK_INTL !== 'false',
  DEFAULT_TIMEZONE: import.meta.env?.VITE_DEFAULT_TIMEZONE || 'UTC',
  IS_DEV: import.meta.env?.DEV ?? false,
  IS_PROD: import.meta.env?.PROD ?? true
};
