var mysqlConfig = require('../config/mysql')

// 获取商品列表
getCommodityList = (req, res) => {
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
}

module.exports = {
    getCommodityList
}