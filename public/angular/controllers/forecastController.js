Sundial.Controllers.

controller('ForecastController', ['$scope', '$location', 'forecastFactory', 'locationService', function($scope, $location, forecastFactory, locationService) { 

	vm = this;

	var _init = function() {
		vm.city = locationService.getCity();  	
		vm.current = vm.setForecast(vm.city);
	}; 
	
	
	vm.setForecast = function(city) {
		forecastFactory.getForecast(vm.city).then(function(res) {
			vm.current = res; 
		}); 
	} 

	_init(); 

}]); 