const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');


const router = express.Router();



router.post('/login',
passport.authenticate('local', { failureRedirect: '/login' }),
function(req, res) {
  res.redirect('/');
});
      

module.exports = router;