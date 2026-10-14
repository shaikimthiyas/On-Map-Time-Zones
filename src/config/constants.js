/**
 * Horologium Application Constants
 */
export const APP_CONFIG = {
  APP_NAME: 'Horologium',
  VERSION: '1.0.0',
  CLOCK_TICK_INTERVAL_MS: 1000,
  DEFAULT_FOCAL_COUNTRY: 'United Kingdom',
  DEFAULT_PINNED_CITIES: [
    { city: 'London', country: 'United Kingdom', tz: 'Europe/London' },
    { city: 'Tokyo', country: 'Japan', tz: 'Asia/Tokyo' },
    { city: 'New York', country: 'United States', tz: 'America/New_York' },
    { city: 'Berlin', country: 'Germany', tz: 'Europe/Berlin' },
    { city: 'New Delhi', country: 'India', tz: 'Asia/Kolkata' },
    { city: 'Sydney', country: 'Australia', tz: 'Australia/Sydney' }
  ],
  STORAGE_KEYS: {
    THEME: 'horologium_theme',
    TIME_FORMAT: 'horologium_format',
    PINNED: 'horologium_pinned'
  },
  MAP: {
    VIEWBOX_WIDTH: 2000,
    VIEWBOX_HEIGHT: 857,
    DEFAULT_CENTER_X: 1000,
    DEFAULT_CENTER_Y: 428,
    MIN_ZOOM: 0.7,
    MAX_ZOOM: 4.5,
    ZOOM_STEP: 0.35
  },
  BUSINESS_HOURS: {
    START_HOUR: 9,
    END_HOUR: 17
  }
};

export const STORAGE_KEYS = APP_CONFIG.STORAGE_KEYS;
