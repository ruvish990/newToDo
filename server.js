require("dotenv").config();
const express = require("express");
const cors = require("cors");
const pool = require("./config/db"); // connect to PostgreSQL

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/todos", require("./routes/todoRoutes"));

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
