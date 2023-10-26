const express = require('express');
const router = express.Router();
const userQueries = require('../db/queries/users');


// browse home page
router.get('/', (req, res) => {
  const userID = req.cookies.userID;
  if (!userID) {
    const templateVars = {userID, username: 'Username'};
    return res.render('index', templateVars);
  }

  userQueries.getUsernameByID(userID)
    .then(username => {
      const templateVars = { userID, username};
      return res.render('index', templateVars);
    });

});

module.exports = router;
