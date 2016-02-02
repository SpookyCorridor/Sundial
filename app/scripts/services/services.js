angular.module('Sundial.services', []).

service('locationService', function() {

	var self = this; 

	this.city = ''; 

	this.setCity = function(city) {
		typeof city === 'string' ? self.city = city : self.city = 'Chicago, IL'; 
	}
	
	this.getCity = function() {
		return self.city; 
	}
}); 