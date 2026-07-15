import express from "express";
import pg from "pg";

const { Pool } = pg;

export const app = express();

const pool = new Pool({
  connectionString: "postgresql://postgres.lhmphyqbjpfxsqtwgxaw:taskflow@1234@aws-1-ap-northeast-1.pooler.supabase.com:5432/postgres",
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