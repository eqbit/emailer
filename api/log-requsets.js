const { pool } = require('./dbconfig');

const LogRequests = {
  async insertNewRequest({ name, email, ip }) {
    const values = [
      name,
      email,
      ip,
      new Date()
    ];
    
    const query = `
    INSERT INTO requests
    (name, email, ip, date)
    VALUES
    ($1, $2, $3, $4)`;
  
    try {
      await pool.query(query, values);
    } catch (e) {
      console.error(e.message)
    }
  }
};

module.exports = LogRequests;
