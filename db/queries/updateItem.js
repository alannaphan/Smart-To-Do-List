const db = require('../connection');

const updateItemByID = (catergoryID, name, deadline, itemID) => {
  return db.query(`
  UPDATE items
  SET category_id = $1,
  name = $2,
  deadline = $3
  WHERE id = $4;
  `, [catergoryID, name, deadline, itemID])
};

module.exports = updateItemByID;


