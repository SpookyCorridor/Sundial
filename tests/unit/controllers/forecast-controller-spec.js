describe('Forecast Controller', function() {

	var $state, 
			$location,
			$rootScope,
			$scope,
			Forecast; 

	beforeEach(module('Sundial.Controllers')); 

	beforeEach(inject(function(_$controller_, _$rootScope_) {
		$rootScope = _$rootScope_; 
		$scope = $rootScope.$new();

		Forecast = _$controller_('ForecastController', { $scope : $scope });		
		
	}));



});