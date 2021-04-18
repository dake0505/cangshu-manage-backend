var express = require('express')
var router = express.Router()
var expenditureController = require('../controllers/expenditureController')

router.post('/insertExpenditure', expenditureController.insertExpenditure)

module.exports = router