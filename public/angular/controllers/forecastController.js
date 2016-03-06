angular.module('Sundial.controllers')

.controller('ForecastController', ['$scope', '$location', 'forecastFactory', 'locationService', function($scope, $location, forecastFactory, locationService) { 

	vm = this;
	vm.current = null; 

	var _init = function() {
		vm.mode = locationService.getMode(); 
		vm.city = locationService.getCity();  	
		vm.geolocation = locationService.getGeolocation(); 
		if (!vm.city && !vm.geolocation) {
			vm.city = 'Chicago, IL'; 
			vm.mode = 'city'; 
		}
		vm.setForecast();
	}; 
	
	
	vm.setForecast = function() {
		var method; 
		method = vm.mode === 'city' ? vm.city : vm.mode; 
		forecastFactory.getForecast(method).then(function(res) {
			vm.current = res; 
		});
	} 

	_init(); 

}]); 