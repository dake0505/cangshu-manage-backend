var express = require('express');
var router = express.Router();
var goodController = require('../controllers/goodController')

/* GET users listing. */
router.get('/list', goodController.getgoodList);

module.exports = router;
