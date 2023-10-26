const express = require('express');
const router = express.Router();
const getCategory = require('../api');
const createItem = require('../db/queries/createItem')

router.get('/', (req, res) => {
  const userID = req.cookies.userID;
  const name = req.cookies.username;
  const templateVars = { userID: userID, username: name };
  return res.render('items', templateVars);
});

router.post('/', (req, res) => {
  // const userID = req.cookies.userID
  console.log(req.body)
  // const categoryID = getCategory(req.body);
  // const name = req.body;
  // const deadline = '2023-10-30';

  // createItem(userID, categoryID, name, deadline);

  return res.redirect('/');
})
module.exports = router;
