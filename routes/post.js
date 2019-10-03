const passport = require('passport');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();




router.post('/login', 
passport.authenticate('local', { failureRedirect: '/login' }),
async function( req, res) {
  const body = {
    _id: req.user._id,
    email: req.user.email
  };
const token = jwt.sign({
  user: body
  }, 'top_secret');
res.send({ token });
});

module.exports = router;