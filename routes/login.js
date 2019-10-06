const passport = require('passport');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', { loggedout: false, registered: false , login: "",message:req.flash('loginMessage') });

});

router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/',
        failuereFlash:true
    }),
    async function (req, res) {
        const userTotoken = {
            _id: req.user._id,
        };
        const token = jwt.sign( {
          userID:userTotoken
        }, 'top_secret',(err,token) => {
            res.redirect(`login/user/?secret_token=${token}`);
            
        })
       
        return token
    });

module.exports = router;