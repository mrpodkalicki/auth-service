const passport = require('passport');

module.exports =  {
    auth: (req, res, next) => passport.authenticate('jwt', { session: false })(req, res, next)
}