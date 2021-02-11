var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/list', function(req, res, next) {
    console.log(req)
    res.send('商品列表');
});

module.exports = router;
