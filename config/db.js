const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",         // Your PostgreSQL username
  host: "localhost",        // Usually localhost
  database: "tododb",       // The database you created
  password: "as%Eb370",// Replace with the password you set during install
  port: 5432                // Default PostgreSQL port
});

// Optional: check connection immediately
pool.connect((err) => {
  if (err) {
    console.error("PostgreSQL connection error:", err);
  } else {
    console.log("PostgreSQL connected successfully");
  }
});

module.exports = pool;
