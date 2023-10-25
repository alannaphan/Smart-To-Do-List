const db = require('../connection');

const getItemsByUser = (user_id) => {
  return db.query(`SELECT * FROM items WHERE user_id = $1`, [user_id])
  .then((res) => {
    console.log(res);
    console.log(res.rows);
  })
}
const createItem = (user_id, category_id, name, deadline) => {
  return db.query(`INSERT INTO items (user_id, category_id, name, deadline) VALUES ($1, $2, '$3', (DATE '$4'));`, [user_id, category_id, name, deadline])
    .then((res) => {
      console.log(res);
      getItemsByUser(user_id)
    });
};

module.exports = { getUserByName };

