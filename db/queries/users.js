const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const getUserByUserID = (id) => {
  return db.query('SELECT * FROM users WEHRE id = $1', [id])
    .then(data => {
      return data.rows;
    });
};

module.exports = { getUsers, getUserByUserID };
