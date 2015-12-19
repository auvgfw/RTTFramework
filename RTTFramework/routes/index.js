var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.send("1111");
});

/*
router.get('/abc', function (req, res) {
    res.send("abc");
});*/

module.exports = router;