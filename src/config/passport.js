
const LocalStrategy = require("passport-local").Strategy;
const JWTstrategy = require('passport-jwt').Strategy;
const ExtractJWT = require('passport-jwt').ExtractJwt;
const User = require("../mongoosedb/userModel").User;


module.exports = function(passport){
    // console.log(passport,'PASS')
   
    console.log('USEloalStorage')
    passport.use('login', new LocalStrategy({
        usernameField : 'login',
        passwordField : 'password',
        passReqToCallback : true
    },
    (req, login, password, done) => { 
        console.log(login,"login")
        console.log(password,"pasword")
        User.findOne({ 'login' :  login }, (err, user) => {
            const message = "Invalid login or password."
            if (err){
                console.log(err,'ERR')
                return done(err);
            }
               

            if (!user)
                return done(null, false, req.flash('loginMessage', message));

            if (!user.validPassword(password))
                return done(null, false, req.flash('loginMessage', message));

            return done(null, user);
        });
        passport.serializeUser((user, done) => done(null, user.id));

        passport.deserializeUser((id, done) =>{
            User.findById(id, (err, user) => done(null, user.id));
        })

    }));
    passport.use(new JWTstrategy({
        secretOrKey: 'top_secret',
        jwtFromRequest: ExtractJWT.fromUrlQueryParameter('secret_token')
    }, async (token, done) => {
        console.log('passportStrategy');
        try {
            return done(null, token.user);
        } catch (error) {
             console.log('Error Startegy');
            done(error);
        }
    }));

}

