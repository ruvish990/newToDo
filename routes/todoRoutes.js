const express = require("express");
const router = express.Router();
const pool = require("../config/db");

// CREATE Todo
router.post("/", async (req, res) => {
  try {
    const { title } = req.body;
    const result = await pool.query(
      "INSERT INTO todos (title) VALUES ($1) RETURNING *",
      [title]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// GET all Todos
router.get("/", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM todos ORDER BY id DESC");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// UPDATE Todo
router.put("/:id", async (req, res) => {
  try {
    const { completed } = req.body;
    const result = await pool.query(
      "UPDATE todos SET completed=$1 WHERE id=$2 RETURNING *",
      [completed, req.params.id]
    );
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json(err.message);
  }
});

// DELETE Todo
router.delete("/:id", async (req, res) => {
  try {
    await pool.query("DELETE FROM todos WHERE id=$1", [req.params.id]);
    res.json({ message: "Todo deleted" });
  } catch (err) {
    res.status(500).json(err.message);
  }
});

module.exports = router;
