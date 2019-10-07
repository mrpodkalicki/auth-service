const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index', {message: req.flash('loginMessage')});
});

module.exports = router;