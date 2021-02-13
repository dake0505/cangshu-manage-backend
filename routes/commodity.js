var express = require('express');
var router = express.Router();
var mysqlConfig = require('../config/mysql')

/* GET users listing. */
router.get('/list', function(req, res, next) {
    console.log(req)
    var sql = 'SELECT * FROM commodity_info'
    var sqlArr = []
    var callback = (err, data) => {
        if (err) {
            console.log('connect error')
        } else {
            res.send({
                'list': data
            })
        }
    }
    // res.send('商品列表')
    mysqlConfig.sqlConnect(sql, sqlArr, callback)
});

module.exports = router;
