/*
 * All routes for Users are defined here
 * Since this file is loaded in server.js into /users,
 *   these routes are mounted onto /users
 * See: https://expressjs.com/en/guide/using-middleware.html#middleware.router
 */

const express = require('express');
const router  = express.Router();
const app = express();
const cookieSession = require('cookie-session');

const { getUserByName } = require('../db/queries/helpers');

// middleware
app.use(express.urlencoded({ extended: true })); // convert the request body from a Buffer into string
app.use(cookieSession({
  name: 'whateverUserID',
  keys: ["asdfasdf"],
}));


// browse user profile page
router.get('/', (req, res) => {
  res.render('users');
});

router.post('/login', (req, res) => {
  const name = req.body.username;
  getUserByName(name)
    .then((user) => {
      console.log(user);
      console.log(req.session);
      // req.session["user_id"] = user.id;

      // res.json(user);
    });
});

module.exports = router;
