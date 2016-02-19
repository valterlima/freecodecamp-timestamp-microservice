var express = require('express');
var router = express.Router();
var timeController = require('../controller/timeController.js');

/* GET home page. */
router.get('/', function(req, res, next) {
	console.log('here', req.body);
  res.render('index', { title: 'Express' });
});

router.get('/:param', function(req, res, next) {
	var param = req.params.param;	
	res.send(timeController.parse(param));
});

module.exports = router;
