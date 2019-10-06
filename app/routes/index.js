const express = require("express");
const router = express.Router();

router.get('/', (req, res) => {
    console.log('Hello from GET!');
    res.render('index', { message: "", login: "" });
});

module.exports = router;