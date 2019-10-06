const passport = require('passport');
const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();


router.get('/',
    function (req, res) {
       
        res.redirect('/', {
            message: req.flash('loginMessage')
        })
    })

router.post('/login',
    passport.authenticate('local', {
        failureRedirect: '/',
        failuereFlash:true
    }),
    async function (req, res) {
        const user = {
            _id: req.user._id,
            
        };
        const login = req.user.login;
        const token = jwt.sign( {
          user:user
        }, 'top_secret',(err,token) => {
            // console.log(req.user.login,"LOGIN")
                
                res.render('loggedIn',{ 
                    login:req.user.login,
                    admin:req.user.admin
                
                } );
            //   res.redirect(`loggedIn/?secret_token=${token}`)
        })
        return token
    });

module.exports = router;