describe('Home Controller', function() {

	var $state, 
			$location,
			$rootScope,
			$scope,
			home; 

	beforeEach(function() {
		module('Sundial');  

		inject(function(_$controller_, _$rootScope_, _$location_, _locationService_) {
		$rootScope = _$rootScope_; 
		$scope = $rootScope.$new(); 
		$location = _$location_;
		$location.path('/badPath');
		locationService = _locationService_; 
		
		home = _$controller_('HomeController', { $scope : $scope });		
		
		});
	}); 

	it('should change path to /forecast on clicking forecast button', function() {
		expect($location.path()).not.toBe('/forecast');
		home.goToForecast(); 
		expect($location.path()).toBe('/forecast');
	});

	it('should call location.setCity() when the city model changes', function() {

		var citySpy = spyOn(locationService, 'setCity'); 
		home.city = 'Portland'; 
		$scope.$digest();  

		expect(citySpy).toHaveBeenCalledWith('Portland'); 
		
	});

});