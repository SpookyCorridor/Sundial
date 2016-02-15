var express 		= require('express'),
		bodyParser  = require('body-parser'),
		 //use node's native qs string parsing library 
		urlencode   = bodyParser.urlencoded({ extended: false }),
		router      = express.Router(),
		config      = require('config'),
		request     = require('request');

router.route('/')
	.post(function(req,res){ 
		var uri = 'http://api.openweathermap.org/data/2.5/forecast/daily?',
		appid   = config.get('Api.openWeatherMap.appid'),
		q       = req.body.q, //city
		cnt     = req.body.cnt; //# days 

		sendForecast = function (body) {
			return res.send(body); 
		}
	
		request(
			{
				method: 'GET',
				uri: uri, 
				qs: 
					{ appid: appid,
						q: q,
						cnt: cnt
					}
				
			}, function(err,res,body) {
				if (err) throw err;
				return sendForecast(body); 
			}
		); 

	}); 

module.exports = router; 

