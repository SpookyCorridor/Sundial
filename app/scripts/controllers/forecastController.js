Sundial.Controllers.

controller('ForecastController', ['$scope', '$location', 'forecastFactory', 'locationService', function($scope, $location, forecastFactory, locationService) { 

	vm = this;
	vm.city = locationService.getCity(); 
	
	//get forecast

	//set forecast 
	this.setForecast = function(city) {
		forecastFactory.getForecast(vm.city).then(function(res) {
			vm.current = res; 
		}); 
	} 

}]); 