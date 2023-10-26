/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();

const { getUserByName } = require('../db/queries/helpers');


// browse user profile page
router.get('/', (req, res) => {
  const userID = req.cookies.userID;
  const name = req.cookies.username;
  const templateVars = { userID: userID, username: name};
  return res.render('users', templateVars);
});

// login
router.post('/login', (req, res) => {
  const name = req.body.username;
  getUserByName(name)
    .then((user) => {
      res.cookie('userID', user.id);
      res.cookie('username', user.name);
      // res.json(user);
      return res.redirect('/');
    })
    .catch((err) => {
      console.log('error logging in');
      console.error(err);
    });
});

// logout
router.post('/logout', (req, res) => {
  res.clearCookie('userID');
  res.clearCookie('username');
  // res.send('done');
  return res.redirect('/');
});

module.exports = router;
