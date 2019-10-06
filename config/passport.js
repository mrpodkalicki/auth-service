const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');

const User = require("../app/models/userModel").User;

module.exports = function (passport) {
    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => done(null, user.id));
    })

    passport.use(new LocalStrategy({
        usernameField: 'login',
    },
        (login, password, done) => {
            User.findOne({ login: login })
                .then(user => {
                    if (!user) return done(null, false);

                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) throw err;

                        if (isMatch) {
                            return done(null, user);
                        } else {
                            return done(null, false);
                        }
                    })
                })
                .catch(err => console.log(err));

        }));

    const jwtOptions = {
        jwtFromRequest: ExtractJwt.fromHeader('authorization'),
        secretOrKey: 'secretCCTeamDeltaAuthService'
    };

    passport.use('jwtLogin', new JwtStrategy(jwtOptions, function (payload, done) {
        User.findById(payload.sub, function (err, user) {
            if (err) { return done(err, false); }

            if (user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));

}
