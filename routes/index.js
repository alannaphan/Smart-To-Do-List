const express = require('express');
const router = express.Router();

// browse home page
router.get('/', (req, res) => {
  const userID = req.cookies.userID;
  const name = req.cookies.username;
  const templateVars = { userID: userID, username: name };

  return res.render('index', templateVars);
});



module.exports = router;
