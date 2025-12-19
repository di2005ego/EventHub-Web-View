
import { db } from "./db";

export function getEvents(): Promise<any[]> {
  return new Promise((resolve, reject) => {
    db.all("SELECT * FROM events ORDER BY datetime ASC", (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

export function getEvent(id: string): Promise<any> {
  return new Promise((resolve, reject) => {
    db.get("SELECT * FROM events WHERE id = ?", [id], (err, row) => {
      if (err) reject(err);
      else resolve(row);
    });
  });
}
