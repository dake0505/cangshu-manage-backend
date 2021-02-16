var express = require('express');
var router = express.Router();
var commodityController = require('../controllers/commodityController')

/* GET users listing. */
router.get('/list', commodityController.getCommodityList);

module.exports = router;
