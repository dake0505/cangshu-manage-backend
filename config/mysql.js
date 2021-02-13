const mysql = require('mysql')

module.exports = {
    // 数据库配置
    config: {
        host: 'localhost',
        user: 'root',
        password: 'jiangqi123!@#',
        database: 'mysql',
        port: 3306
    },
    // 连接数据库，采用连接池
    // 连接池对象
    sqlConnect: function (sql, sqlArr, callback) {
        var pool = mysql.createPool(this.config)
        pool.getConnection((err, con) => {
            console.log('连接池')
            if (err) {
                console.log('连接失败', err)
                return
            }
            // 事件驱动回调
            con.query(sql, sqlArr, callback)
            // 释放链接
            con.release()
        })
    }
}