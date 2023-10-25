const db = require('../connection');

const getUserByName = (name) => {
  return db.query(`SELECT * FROM users WHERE name = $1`, [name])
    .then((res) => {
      return res.rows[0];
    });
};

module.exports = { getUserByName };
