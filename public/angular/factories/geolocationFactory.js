angular.module('Sundial.factories')

.factory('geolocationFactory', ['$q', '$window', function($q, $window){

	var geolocation = {};

	geolocation.getGeolocation = function() {
		var deferred = $q.defer();

		if (!$window.navigator.geolocation) {
			deferred.reject('Geolocation not supported'); 
		} else {
			$window.navigator.geolocation.getCurrentPosition(
				function(position) {
					deferred.resolve(position); 
				},
				function(err) {
					deferred.reject(err); 
				}); 
		}
		return deferred.promise; 

	}

	return geolocation; 
}]); 