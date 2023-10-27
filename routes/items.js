const express = require("express");
const router = express.Router();
const getCategory = require("../api");
const {
  createItem,
  deleteItemByID,
  updateItemByID,
} = require("../db/queries/items");
const userQueries = require("../db/queries/users");

// POST request to create new list item
router.post("/", (req, res) => {
  const userID = req.cookies.userID;
  const name = req.body.item;
  const deadline = req.body.date;
  getCategory(name)
    .then((categoryID) => {
      createItem(userID, categoryID, name, deadline);
    })
    .then(() => res.redirect("/"));
});

// POST request to delete list item
router.post("/delete/", (req, res) => {
  const itemID = req.body.todoId;
  deleteItemByID(itemID);
  return res.redirect("/");
});

// GET request to edit item page
router.get("/:id", (req, res) => {
  const userID = req.cookies.userID;

  userQueries.getUsernameByID(userID).then((username) => {
    const id = req.params.id;
    const templateVars = { userID, username, id };
    return res.render("items", templateVars);
  });
});

// POST request to edit item details
router.post("/:id", (req, res) => {
  const updatedItem = req.body["updated-item"];
  const updatedDate = req.body["updated-date"];
  const updatedCat = req.body["list-category"];
  const itemID = req.params.id;

  updateItemByID(updatedCat, updatedItem, updatedDate, itemID)
    .then(() => res.redirect("/"))
    .catch((err) => {
      console.log(err);
    });
});

module.exports = router;
