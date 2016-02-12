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

  	var req = {
  		method: 'POST', 
  		url: 'http://localhost:8080/forecast',
  		data: {
  			q: preparedCity,
        cnt: Forecast.dayCnt
  		}
  	}; 

    return $http(req)
    	.then(function(res, err) {
    		if (err) throw err; 
  			console.log("success");
  			console.log(res.data); 
  			return res.data;
  		}); 

	} // getForecast 
 
	return Forecast; 

}]); 