/**
 * Horologium Embedded SQLite Database
 * High-performance, zero-external-dependency embedded database via node:sqlite
 */
import { DatabaseSync } from 'node:sqlite';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { scryptSync, randomBytes, timingSafeEqual } from 'node:crypto';
import { existsSync, mkdirSync } from 'node:fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const dataDir = resolve(__dirname, '../data');
if (!existsSync(dataDir)) {
  mkdirSync(dataDir, { recursive: true });
}

const dbPath = resolve(dataDir, 'horologium.db');
export const db = new DatabaseSync(dbPath);

// Enable WAL mode for high concurrent read performance
db.exec(`
  PRAGMA journal_mode = WAL;
  PRAGMA foreign_keys = ON;

  CREATE TABLE IF NOT EXISTS operators (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    callsign TEXT UNIQUE NOT NULL,
    password_hash TEXT NOT NULL,
    salt TEXT NOT NULL,
    role TEXT DEFAULT 'operator',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS pinned_stations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    city TEXT NOT NULL,
    country TEXT NOT NULL,
    tz TEXT NOT NULL,
    sort_order INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS transmissions (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    transmitter_name TEXT NOT NULL,
    return_frequency TEXT NOT NULL,
    payload TEXT NOT NULL,
    ip_address TEXT,
    status TEXT DEFAULT 'acknowledged',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS telemetry_logs (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    event_type TEXT NOT NULL,
    details TEXT,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );
`);

/**
 * Password Hashing & Verification via native scrypt
 */
export function hashPassword(password, salt = null) {
  const currentSalt = salt || randomBytes(16).toString('hex');
  const derivedKey = scryptSync(password, currentSalt, 64);
  return {
    hash: derivedKey.toString('hex'),
    salt: currentSalt
  };
}

export function verifyPassword(password, storedHash, salt) {
  const derivedKey = scryptSync(password, salt, 64);
  const keyBuffer = Buffer.from(storedHash, 'hex');
  return timingSafeEqual(derivedKey, keyBuffer);
}

/**
 * Seed initial operator & telemetry matrix if empty
 */
function seedDatabase() {
  // 1. Seed admin operator
  const countStmt = db.prepare('SELECT COUNT(*) as count FROM operators');
  const { count } = countStmt.get();

  if (count === 0) {
    const { hash, salt } = hashPassword('password123');
    const insertOp = db.prepare(`
      INSERT INTO operators (callsign, password_hash, salt, role)
      VALUES (?, ?, ?, ?)
    `);
    insertOp.run('admin', hash, salt, 'commander');
    console.info('[Horologium DB] Seeded default operator callsign: "admin"');
  }

  // 2. Seed initial pinned telemetry stations
  const pinCountStmt = db.prepare('SELECT COUNT(*) as count FROM pinned_stations');
  const { count: pinCount } = pinCountStmt.get();

  if (pinCount === 0) {
    const initialPins = [
      { city: 'London', country: 'United Kingdom', tz: 'Europe/London', sort: 1 },
      { city: 'Tokyo', country: 'Japan', tz: 'Asia/Tokyo', sort: 2 },
      { city: 'New York', country: 'United States', tz: 'America/New_York', sort: 3 },
      { city: 'Berlin', country: 'Germany', tz: 'Europe/Berlin', sort: 4 },
      { city: 'New Delhi', country: 'India', tz: 'Asia/Kolkata', sort: 5 },
      { city: 'Sydney', country: 'Australia', tz: 'Australia/Sydney', sort: 6 }
    ];

    const insertPin = db.prepare(`
      INSERT INTO pinned_stations (city, country, tz, sort_order)
      VALUES (?, ?, ?, ?)
    `);

    for (const p of initialPins) {
      insertPin.run(p.city, p.country, p.tz, p.sort);
    }
    console.info('[Horologium DB] Seeded 6 default meridian telemetry stations');
  }
}

seedDatabase();
