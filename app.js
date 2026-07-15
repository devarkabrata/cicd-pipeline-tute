import express from "express";
import pg from "pg";
import dotenv from "dotenv";

dotenv.config();

const { Pool } = pg;

export const app = express();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
});

app.get("/greet", (req, res) => {
  res.status(200).json({
    success: true,
    msg: "Hello welcome here bro yaarrrr"
  });
});

app.get("/db-check", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.status(200).json({
      success: true,
      time: result.rows[0].now
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message
    });
  }
});