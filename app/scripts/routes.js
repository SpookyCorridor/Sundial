angular.module('Sundial.config', ['ui.router']).

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
			templateUrl: 'views/tpl/home.html',
			controller: 'testing',
			controllerAs: 'test'
		}).

		state('404', {
			templateUrl: 'views/tpl/404.html'
		}); 

}]); 
