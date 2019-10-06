const LocalStrategy = require("passport-local").Strategy;
const User = require('../mongoosedb/userModel').User;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const jwt = require('jsonwebtoken');

module.exports = function(passport){
    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) =>{
        User.findById(id, (err, user) => done(null, user.id));
    })

    passport.use( new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password',
        passReqToCallback: true
    },
    (req, login, password, done) => { 
        User.findOne({ 'login':  login },async  (err, user) => {
            const message = "Invalid login or password."
            if (err)
                return done(err);

            if (!user)
                return done(null, false, req.flash('loginMessage', message));
                // console.log(password,'pass')
                const validate = await user.validPassword(password);
                if (!validate)
                return done(null, false, req.flash('loginMessage', message));

            return done(null, user);
        });

    }));

}
