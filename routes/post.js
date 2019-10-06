const passport = require('passport');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();


router.get('/',
    function (req, res) {
       
        res.render('loggedIn', {
            message: req.flash('loginMessage')
        })
    })

router.post('/',
    passport.authenticate('local', {
        failureRedirect: '/login',
        failuereFlash:true
    }),
    async function (req, res) {
        const user = {
            _id: req.user._id,
            
        };
        const token = jwt.sign( {
          user:user
        }, 'top_secret',(err,token) => {
              res.redirect(`login/user/?secret_token=${token}`)
        })
        return token
    });

module.exports = router;