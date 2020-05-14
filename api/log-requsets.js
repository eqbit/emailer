const sql = require('slonik').sql;
const { pool } = require('./dbconfig');

const LogRequests = {
  async insertNewRequest({ name, email }) {
    const values = [
      name,
      email
    ];
    
    const query = `
    INSERT INTO requests
    (name, email)
    VALUES
    ($1, $2)`;
  
    try {
      await pool.query(query, values);
      console.log('success');
    } catch (e) {
      console.error(e.message)
    }
  }
};

module.exports = LogRequests;
