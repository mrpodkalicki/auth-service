const express = require('express');
const router = express.Router();

/* GET users listing. */


/* GET user profile. */
router.get('/user', function (req, res, next) {
     console.log(req.user._id, 'id')
     console.log(req.user.login, 'login')
     console.log(req.user.email, 'email')
    res.render('loggedIn', {
        login: req.user.login,
        admin: req.user.admin
    });
});

module.exports = router;