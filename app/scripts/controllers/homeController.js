Sundial.Controllers. 

controller('HomeController', ['$scope', '$location', 'locationService', function($scope, $location, locationService) {

	var vm = this; 

	vm.city = 'Chicago, IL'; 

	this.goToForecast = function() {
		$location.path('/forecast');
	}

	$scope.$watch(function() {
		return vm.city;
	}, function(cur, orig) {
		locationService.setCity(cur);
	});  

}]); 