const db = require('../connection');

const getItemsByUser = (user_id) => {
  return db.query(`SELECT * FROM items WHERE user_id = $1`, [user_id])
  .then((res) => {
    console.log(res.rows);
  })
}

const createItem = (userID, categoryID, name, deadline) => {
  return db.query(`INSERT INTO items (user_id, category_id, name, deadline) VALUES ($1, $2, $3, $4);`, [userID, categoryID, name, deadline])
    .then((res) => {
        getItemsByUser(userID)
      });
};

module.exports = createItem;
