angular.module('Sundial.directives', []).

directive('weatherReport', function() {
	return {
		restrict: 'E',
		templateUrl: 'views/tpl/weatherReport.html',
		replace: true, 
		scope: {
			weatherDay: '=',
			convertToStandard: '&',
			convertToDate: '&',
			dateFormat: "@"
		}
	}
})