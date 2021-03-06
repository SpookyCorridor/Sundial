angular.module('Sundial.controllers')

.controller('HomeController', ['$scope', '$location', 'locationService', 'geolocationFactory', function($scope, $location, locationService, geolocationFactory) {

	var vm = this; 

	vm.city = 'Chicago, IL'; 
	vm.geolocation = []; 

	function init () {
		vm.captureLocation(); 
	}

	vm.goToForecast = function() {
		$location.path('/forecast');
	}

	vm.captureLocation = function() {
		geolocationFactory.getGeolocation()
			.then(function(geo){
				vm.geolocation = [geo.coords.latitude, geo.coords.longitude];
				$location.path('/forecast'); 
			})
			.catch(function(err){
				
				if (err.constructor.name === 'PositionError') {
					console.log('location blocked'); 
					// TODO: add popup to notify user later
				} else {
					throw err; 
				}

			})
	}

	$scope.$watch(function() {
		return vm.city;
	}, function(cur, orig) {
		locationService.setCity(cur);
	});  

	$scope.$watch(function() {
		return vm.geolocation;
	}, function(cur, orig) {
		locationService.setGeolocation(cur);
	});  

	init(); 

}]); 