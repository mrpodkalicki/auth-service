const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require("../app/models/userModel").User;

module.exports = function(passport){
    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) =>{
        User.findById(id, (err, user) => done(null, user.id));
    })

    passport.use('login', new LocalStrategy({
        usernameField: 'login',
        passwordField: 'password',
        passReqToCallback: true
    },
    (req, login, password, done) => { 
        User.findOne({ 'login':  login }, (err, user) => {
            const message = "Invalid login or password."
            if (err)
                return done(err);

            if (!user)
                return done(null, false);

            if (!user.validPassword(password))
                return done(null, false);

            return done(null, user);
        });

    }));

    const jwtOptions = {
        jwtFromRequest: ExtractJwt.fromHeader('authorization'),
        secretOrKey: 'secretCCTeamDeltaAuthService'
      };

    passport.use('jwtLogin',  new JwtStrategy(jwtOptions, function(payload, done) {
        User.findById(payload.sub, function(err, user) {
          if (err) { return done(err, false); }
      
          if (user) {
            done(null, user);
          } else {
            done(null, false);
          }
        });
    }));

}
