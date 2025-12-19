
import sqlite3 from "sqlite3";
import path from "path";

const dbPath = path.join(process.cwd(), "events.db");
export const db = new sqlite3.Database(dbPath);
