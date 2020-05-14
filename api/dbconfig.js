const { Pool } = require('pg');

const pool = new Pool({
  user: 'landing',
  host: 'localhost',
  database: 'landing',
  password: 'landing',
  port: 5432,
});

module.exports = {
  pool
};
