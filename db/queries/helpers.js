const db = require('../connection');

const getUserByName = (name) => {
  return db.query(`SELECT * FROM users WHERE name = $1`, [name])
    .then((res) => {
      return res.rows[0];
    });
};

const getAllToDosByUserID = function(userID) {
  return db.query(`
    SELECT * FROM items
    WHERE user_id = $1
    `, [userID])
    .then((res) => {
      return res.rows;
    });
};

module.exports = { getUserByName, getAllToDosByUserID };
