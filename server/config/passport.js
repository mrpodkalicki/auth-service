const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');

const User = require("../app/models/userModel").User;

module.exports = function (passport) {
   passport.use(new LocalStrategy({
           usernameField: 'login',
           passwordField: 'password',
           passReqToCallback: true
       },
       function (req, login, password, done) {
           User.findOne({
               'login': login
           }, async (err, user) => {
               const message = "Invalid login or password."
               if (err) {
                   console.log(err, 'ERR')
                   return done(err);
               }
               if (!user)
                   return done(null, false, req.flash('loginMessage', message));
               const validate = await bcrypt.compare(password, user.password);
               if (!validate)
                   return done(null, false, req.flash('loginMessage', message));
               return done(null, user);
           });
           passport.serializeUser((user, done) => done(null, user.id));

           passport.deserializeUser((id, done) => {
               User.findById(id, (err, user) => done(null, user.id));
           })
       }));

  
                  
                  

        

    const jwtOptions = {
        jwtFromRequest: ExtractJwt.fromUrlQueryParameter('secret_token'),
        // secretOrKey: process.env.JWT_SECRET
        secretOrKey: 'SIEMA'
    };

    passport.use( new JwtStrategy(jwtOptions, (payload, done) => {
        return User.findOne({_id: payload.userID})
        .then( user => done(null, user))
        .catch(err => done(err));
    }));

}
