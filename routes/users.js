/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const userQueries = require('../db/queries/users');


// browse user profile page
router.get('/', (req, res) => {
  const userID = req.cookies.userID;

  userQueries.getUsernameByID(userID)
    .then(username => {
      const templateVars = {userID, username};
      return res.render('users', templateVars);
    });
});

// update user profile page
router.post('/', (req, res) => {
  const userID = req.cookies.userID;
  const newName = req.body['new-username'];

  userQueries.updateUserByID(newName, userID)
    .then(res.redirect('/users'));

});

// login
router.post('/login', (req, res) => {
  const name = req.body.username;
  userQueries
    .getUserByName(name)
    .then((user) => {
      res.cookie("userID", user.id);
      return res.redirect("/");
    })
    .catch((err) => {
      console.log("error logging in");
      console.error(err);
    });
});

// logout
router.post('/logout', (req, res) => {
  res.clearCookie('userID');
  return res.redirect('/');
});

module.exports = router;
