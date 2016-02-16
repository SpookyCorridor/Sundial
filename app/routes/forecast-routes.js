var express 		= require('express'),
		bodyParser  = require('body-parser'),
		 //use node's native qs string parsing library 
		urlencode   = bodyParser.urlencoded({ extended: false }),
		router      = express.Router(),
		config      = require('config'),
		request     = require('request'),
		forecast   = require('../controllers/forecast')

router.route('/')
	.post(forecast.getForecast); 

module.exports = router; 

