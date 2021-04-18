var mysqlConfig = require('../config/mysql')

// 插入消费记录
insertExpenditure = (req, res) => {
  var sql = `INSERT INTO expenditure_list(id, create_time,update_time,cost_date,cost_type,cost_name,cost_user,cost_detail)
  VALUES (1,2020-03-01 00:00:00,2020-03-01 00:00:00,2020-03-01 00:00:00,type,name,user,detail)`
  var sqlArr = []
  var callback = (err, data) => {
    if (err) console.log(err)
    else {
      res.send({
        'message': 'success'
      })
    }
  }
  mysqlConfig.sqlConnect(sql, sqlArr, callback)
}

module.exports = {
  insertExpenditure
}