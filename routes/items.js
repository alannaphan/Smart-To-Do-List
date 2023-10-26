const express = require('express');
const router = express.Router();
const getCategory = require('../api');
const createItem = require('../db/queries/createItem')
const userQueries = require('../db/queries/users');


router.get('/', (req, res) => {
  const userID = req.cookies.userID;

  userQueries.getUsernameByID(userID)
    .then(username => {
      const templateVars = { userID, username };
      return res.render('users', templateVars);
    });
});

router.post('/', (req, res) => {
  const userID = req.cookies.userID
  const name = req.body.item;
  const deadline = req.body.date;

  getCategory(name)
  .then(categoryID => {
    createItem(userID, categoryID, name, deadline);
  })
  .then(() => res.redirect('/'));
})
module.exports = router;
