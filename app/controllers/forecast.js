var config      = require('config'); 
var request     = require('request');





exports.getForecast = function(req, res, next) {
	var uri 		= 'http://api.openweathermap.org/data/2.5/forecast/daily?',
	appid   = config.get('Api.openWeatherMap.appid'),
	q       = req.body.q, //city
	cnt     = req.body.cnt; //# days 
		
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

	sendForecast = function (body) {
		return res.send(body); 
	}
}; 