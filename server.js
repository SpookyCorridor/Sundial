var express = require('express');
var app = express(); 
var morgan = require('morgan'); 
var bodyParser = require('body-parser'); 
var methodOverride = require('method-override'); 
var forecast = require('./app/routes/forecast-routes'); 


app.use(express.static(__dirname + '/public'));
app.use('/node_modules', express.static(__dirname +'/node_modules'));
app.use(morgan('dev')); 
app.use(bodyParser.urlencoded({"extended":"true"})); 
app.use(bodyParser.json()); 
app.use(methodOverride()); 


app.route('/')

	.get(function(req,res){

		res.send(File(__dirname + '/views/index.html')); 
	})
	
app.use('/forecast', forecast); 

app.listen(8080, function(){
	console.log('listening on port %d', 8080)
}); 