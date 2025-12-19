
const sqlite3 = require("sqlite3").verbose();
const path = require("path");

const db = new sqlite3.Database(path.join(process.cwd(), "events.db"));

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT,
      datetime TEXT,
      location TEXT,
      address TEXT,
      ageLimit INTEGER,
      minPrice INTEGER,
      type TEXT,
      description TEXT,
      poster_url TEXT
    )
  `);

  const stmt = db.prepare(`
    INSERT INTO events 
    (title, datetime, location, address, ageLimit, minPrice, type, description, poster_url)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  stmt.run("Heronwater в Нижнем Новгороде 23 января 2026", "2026-01-23 19:00:00", "Milo Concert Hall", "ул. Родионова 4", 16, 1900, "Концерт", "", "");
  stmt.run("MAIN: НОВЫЙ ГОД", "2026-01-01 00:30:00", "Бывшее здание Milo Club", "Зеленский съезд 8", 18, 1200, "Вечеринка", "", "");
  stmt.run("BUSHIDO ZHO в Нижнем Новгороде 4 апреля 2026", "2026-04-04 19:00:00", "Milo Concert Hall", "ул. Родионова 4", 16, 1500, "Концерт", "", "");
  stmt.run("Ночь Студента x PUL'SAR", "2026-01-23 23:00:00", "Milo Concert Hall", "ул. Родионова 4", 18, 600, "Вечеринка", "", "");
  stmt.run("BIG BABY TAPE | 2026 TOUR", "2026-03-31 18:00:00", "Дворец спорта Нагорный", "просп. Гагарина 29", 16, 2049, "Концерт", "", "");

  stmt.finalize();
});

db.close();
console.log("DB seeded");
