angular.module('Sundial.controllers', []).

controller('HomeController', ['$location', function($location) {

	this.goToForecast = function() {
		$location.path('/forecast'); 
	}

}]); 