Sundial.Controllers.

controller('ForecastController', ['$scope', '$location', 'forecastFactory', 'locationService', function($scope, $location, forecastFactory, locationService) { 

	vm = this; 
	vm.city = locationService.city; 

	console.log(vm.city)
	vm.weatherResult = forecastFactory.getForecast(vm.city).then(function(response) {
		console.log(response)
	});
}]); 