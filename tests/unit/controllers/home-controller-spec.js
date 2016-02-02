describe('Home Controller', function() {

	var $rootScope,
			$scope,
			$state, 
			$location,
			home; 

	beforeEach(module('Sundial.controllers')); 

	beforeEach(inject(function(_$controller_, _$rootScope_, _$location_) {
		$rootScope = _$rootScope_; 
		$scope = $rootScope.$new();
		$location = _$location_;
		home = _$controller_('home', { $scope: $scope }); 
	}));

	describe('it should change paths to forecast on forecast()', function() {
		home.submit(); 
		expect($location.href).toBe('/forecast');
	});

});