var mysqlConfig = require('../config/mysql')

// 获取商品列表
getgoodList = (req, res) => {
    let { page, size } = req.query
    var sql = `
        select count(*) as count from commodity_info;
        SELECT * FROM commodity_info order by id limit ?,?
    `
    var sqlArr = [Number(page), Number(size)]
    var callback = (err, data) => {
        if (err) {
            console.log('connect error', err)
        } else {
            res.send({
                'data': {
                    'count': data[0][0].count,
                    'list': data[1]
                }
            })
        }
    }
    mysqlConfig.sqlConnect(sql, sqlArr, callback)
}

module.exports = {
    getgoodList
}