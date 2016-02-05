angular.module('Sundial.factories', []).

factory('forecastFactory', ['$http', '$q', 'SundialConfig', function($http, $q, SundialConfig){

	var Forecast = {}; 
	var weatherKey = SundialConfig.openWeatherKey;

	Forecast.dayCnt = 1; 
	Forecast.prepareCity = function (city) {
		city === undefined ? city = 'Chicago, IL' : city = city;
		return city; 
	}

	Forecast.getForecast = function(city) {

		var preparedCity = Forecast.prepareCity(city);
		var deferred = $q.defer(); 
		var response; 
		
		$http.jsonp('http://api.openweathermap.org/data/2.5/forecast/daily?', {
			params: {
				appid: weatherKey,
				q: preparedCity,
				cnt: Forecast.dayCnt,	
				callback: 'JSON_CALLBACK'
			}
		}).then(function(res){
				deferred.resolve(res)   
			});  

		return deferred.promise; 
	}

	return Forecast; 

}]); 