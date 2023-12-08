const db = require('../connection');

const getUserByUserID = (id) => {
  return db.query(`
    SELECT *
    FROM users
    WHERE id = $1
    `, [id])
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

const getUserByName = (name) => {
  return db.query(`
    SELECT *
    FROM users
    WHERE name = $1
    `, [name])
    .then((res) => {
      return res.rows[0];
    });
};

module.exports = {
  getUserByUserID,
  updateUserByID,
  getUsernameByID,
  getUserByName,
};
