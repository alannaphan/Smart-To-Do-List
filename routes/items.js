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
  console.log(req.body.item, req.body.date)
  const name = req.body.item;
  const deadline = req.body.date;

  getCategory(name).then(categoryID => {
    console.log('the algo determined the category id is: ', categoryID);

    console.log(categoryID, name)
    createItem(userID, categoryID, name, deadline);
  });


  // return res.redirect('/');
})
module.exports = router;
