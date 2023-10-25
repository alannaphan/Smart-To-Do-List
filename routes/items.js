const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const userID = req.cookies.userID;
  const name = req.cookies.username;
  const templateVars = { userID: userID, username: name };
  return res.render('items', templateVars);
});


module.exports = router;
