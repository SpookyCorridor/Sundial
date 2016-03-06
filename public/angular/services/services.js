angular.module('Sundial.services', ['ngResource']).

service('locationService', function() {

	var self = this; 

	var _city = 'Chicago, IL'; 

	var _geolocation = []; 

	var _mode = 'city'; 

	this.setCity = function(city) {
		typeof city === 'string' ? _city = city : _city = 'Chicago, IL'; 
		this.mode = 'city'; 
	}
	
	this.getCity = function() {
		return _city; 
	}

	this.setGeolocation = function(geo) {
		_geolocation = geo; 
		_mode = 'geolocation'; 
	}

	this.getGeolocation = function() {
		return _geolocation; 
	}

	this.getMode = function() {
		return _mode
	}
}); 

