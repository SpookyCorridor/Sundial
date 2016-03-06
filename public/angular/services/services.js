angular.module('Sundial.services', ['ngResource']).

service('locationService', function() {

	var self = this; 

	this.city = 'Chicago, IL'; 

	this.geolocation = []; 

	this.setCity = function(city) {
		typeof city === 'string' ? self.city = city : self.city = 'Chicago, IL'; 
	}
	
	this.getCity = function() {
		return self.city; 
	}

	this.setGeolocation = function(geo) {
		self.geolocation = geo; 
	}

}); 

