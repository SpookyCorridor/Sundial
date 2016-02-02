describe('Home Controller', function() {

	var $state, 
			$location,
			home; 

	beforeEach(module('Sundial.controllers')); 

	beforeEach(inject(function(_$controller_, _$location_) {
		$location = _$location_;
		home = _$controller_('HomeController', { });
		$location.path('/someWrongUrl') 
	}));

	it('should change path to /forecast on clicking forecast button', function() {
		expect($location.path()).not.toBe('/forecast');
		home.goToForecast(); 
		expect($location.path()).toBe('/forecast');
	});

});