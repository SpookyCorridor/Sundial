angular.module('Sundial.controllers')

.controller('HomeController', ['$scope', '$location', 'locationService', 'geolocationFactory', function($scope, $location, locationService, geolocationFactory) {

	var vm = this; 

	vm.city = 'Chicago, IL'; 

	this.goToForecast = function() {
		$location.path('/forecast');
	}

	this.captureLocation = function() {
		geolocationFactory.getGeolocation()
			.then(function(geo){
				console.log(geo); 
			})
	}

	$scope.$watch(function() {
		return vm.city;
	}, function(cur, orig) {
		locationService.setCity(cur);
	});  

	this.captureLocation(); 

}]); 