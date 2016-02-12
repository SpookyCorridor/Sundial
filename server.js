var express = require('express');
var app = express(); 
var morgan = require('morgan'); 
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override'); 
var request = require('request'); 
var config = require('config')
var router = express.Router(); 



app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname +'/node_modules'));
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({"extended":"true"})); 
app.use(bodyParser.json()); 
app.use(methodOverride()); 


app.route('/')
	.get(function(req,res){
		res.sendFile(__dirname + '/views/index.html'); 
	})

app.route('/forecast')
	.post(function(req,res){ 
		// console.log('recieved request'); 
		var uri = 'http://api.openweathermap.org/data/2.5/forecast/daily?';
		var appid = config.get('Api.openWeatherMap.appid'); 
		var q = req.body.q;
		var cnt = req.body.cnt;
		console.log(q + ' ' + cnt); 
		var btest; 

		
		
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
				return getIt(body); 
			}
		)

		var getIt = function (body) {
			console.log('called'); 
			console.log(body); 
			return res.send(body); 
		}

	}); 

app.listen(8080, function(){
	console.log('listening on port %d', 8080)
}); 