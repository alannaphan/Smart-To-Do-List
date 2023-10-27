const db = require("../connection");

// create new list item in DB
const createItem = (userID, categoryID, name, deadline) => {
  return db.query(
    `INSERT INTO items (user_id, category_id, name, deadline) VALUES ($1, $2, $3, $4);`,
    [userID, categoryID, name, deadline]
  );
};

// update item in DB
const updateItemByID = (catergoryID, name, deadline, itemID) => {
  return db.query(
    `
  UPDATE items
  SET category_id = $1,
  name = $2,
  deadline = $3
  WHERE id = $4;
  `,
    [catergoryID, name, deadline, itemID]
  );
};

// delete item from DB
const deleteItemByID = (itemID) => {
  return db.query(`DELETE FROM items WHERE id = $1`, [itemID]);
};


module.exports = {createItem, updateItemByID, deleteItemByID};
