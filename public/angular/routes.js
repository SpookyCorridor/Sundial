angular.module('Sundial.routes', ['ui.router']).

config( ['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {

	$urlRouterProvider.

		when('', '/home').

		when('/', '/home').

		otherwise(function($injector) {
			$injector.get('$state').go('404', {}, { location: false });
		}); 
		

	$stateProvider.

		state('home', {
			url: '/home',
			templateUrl: 'views/home.html',
			controller: 'HomeController',
			controllerAs: 'home'
		}).

		state('forecast', {
			url: '/forecast',
			templateUrl: 'views/forecast.html',
			controller: 'ForecastController',
			controllerAs: 'forecast'
		}).
		
		state('404', {
			templateUrl: 'views/404.html'
		}); 

}]); 
