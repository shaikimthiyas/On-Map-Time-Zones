/**
 * Horologium Pinned Stations Controller
 * CRUD operations for custom telemetry stations stored in SQLite
 */
import { db } from '../db/database.js';

export function getPins(req, res) {
  try {
    const stmt = db.prepare('SELECT id, city, country, tz, sort_order FROM pinned_stations ORDER BY sort_order ASC, id ASC');
    const pins = stmt.all();
    return res.json({
      success: true,
      pins
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}

export function addPin(req, res) {
  const { city, country, tz, sort_order } = req.body || {};

  if (!city || !country || !tz) {
    return res.status(400).json({
      success: false,
      error: 'Fields "city", "country", and "tz" are required.'
    });
  }

  try {
    const stmt = db.prepare(`
      INSERT INTO pinned_stations (city, country, tz, sort_order)
      VALUES (?, ?, ?, ?)
    `);
    const info = stmt.run(city.trim(), country.trim(), tz.trim(), sort_order || 0);

    return res.status(201).json({
      success: true,
      id: Number(info.lastInsertRowid),
      message: `Station ${city} pinned to horology matrix.`
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}

export function deletePin(req, res) {
  const id = parseInt(req.params.id, 10);
  if (!id) {
    return res.status(400).json({ success: false, error: 'Valid station ID required.' });
  }

  try {
    const stmt = db.prepare('DELETE FROM pinned_stations WHERE id = ?');
    const info = stmt.run(id);

    if (info.changes === 0) {
      return res.status(404).json({ success: false, error: 'Pinned station not found.' });
    }

    return res.json({
      success: true,
      message: 'Station unpinned successfully.'
    });
  } catch (err) {
    return res.status(500).json({ success: false, error: err.message });
  }
}
