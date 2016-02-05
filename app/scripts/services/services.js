angular.module('Sundial.services', ['ngResource']).

service('locationService', function() {

	var self = this; 

	this.city = 'Chicago, IL'; 

	this.setCity = function(city) {
		typeof city === 'string' ? self.city = city : self.city = 'Chicago, IL'; 
	}
	
	this.getCity = function() {
		return self.city; 
	}
}).

service('forecastService', ['$http', 'SundialConfig', function($http, SundialConfig){

	var self = this; 
	var weatherKey = SundialConfig.openWeatherKey;

	this.dayCnt = 1; 
	this.prepareCity = function (city) {
		city === undefined ? city = 'Chicago, IL' : city = city;
		return city; 
	}

	this.getForecast = function(city) {

		var preparedCity = self.prepareCity(city); 
		
		$http.jsonp('http://api.openweathermap.org/data/2.5/forecast/daily?', {
			params: {
				appid: weatherKey,
				q: preparedCity,
				cnt: self.dayCnt,	
				callback: 'JSON_CALLBACK'
			}
		}).then(function(response){
				return response; 
			});  
	}

}]); 