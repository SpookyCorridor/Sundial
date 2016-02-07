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

    return $http.jsonp('http://api.openweathermap.org/data/2.5/forecast/daily?', {
        params: {
            appid: weatherKey,
            q: preparedCity,
            cnt: Forecast.dayCnt,   
            callback: 'JSON_CALLBACK'
        }
    }).then(function(res) {
  			console.log("success");
  			return res.data;

  		})

	    .catch(function(err) {
	      console.log('error')
	      return []; // or {} depending upon required data
	    }); 

	} // getForecast 
 
	return Forecast; 

}]); 