const db = require('../connection');

const deleteItemByID = (itemID) => {
  return db.query(`DELETE FROM items WHERE id = $1`, [itemID])
  .then((res) => {
    console.log(res);
  })
}

module.exports = deleteItemByID;
