const db = require('../connection');

const getUsers = () => {
  return db.query('SELECT * FROM users;')
    .then(data => {
      return data.rows;
    });
};

const getUserByUserID = (id) => {
  return db.query('SELECT * FROM users WHERE id = $1', [id])
    .then(data => {
      return data.rows;
    });
};

const updateUserByID = (newName, id) => {
  return db.query(`
    UPDATE users
    SET name = $1
    WHERE id = $2
    returning name
    `, [newName, id])
    .then(data => {
      return data.rows[0];
    });
};

const getUsernameByID = (id) => {
  return db.query(`
    SELECT name
    FROM users
    WHERE id = $1
  `, [id])
    .then(data => {
      return data.rows[0]['name'];
    });
};

module.exports = { getUsers, getUserByUserID, updateUserByID, getUsernameByID };
