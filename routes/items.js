const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  const userID = req.cookies.userID;
  const name = req.cookies.username;
  const templateVars = { userID: userID, username: name };
  return res.render('items', templateVars);
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


  return res.redirect('/');
})
module.exports = router;
