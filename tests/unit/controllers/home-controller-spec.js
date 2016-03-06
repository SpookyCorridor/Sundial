describe('Home Controller', function() {

	var	$location,
			$rootScope,
			$scope,
			home,
			locationService, 
			mockGeolocationFactory; 

	beforeEach(function() { 

		mockGeolocationFactory = {}; 

		module('Sundial', function($provide) {
			$provide.value('geolocationFactory', mockGeolocationFactory);
		});  

		inject(function($q){
			geo = {coords: {
				latitude: 1,
				longitude: 1
			}}; 

			mockGeolocationFactory.getGeolocation = function(){
				var defer = $q.defer(); 
				defer.resolve(geo); 
				return defer.promise; 
			}
		})

		inject(function(_$controller_, _$rootScope_, _$location_, _locationService_, _geolocationFactory_) {
			$rootScope      = _$rootScope_;
			$scope          = $rootScope.$new();
			$location       = _$location_;
			locationService = _locationService_;
			geolocationFactory = _geolocationFactory_; 
			
			home 	= _$controller_('HomeController', { $scope : $scope, geolocationFactory: geolocationFactory });
		
		});
	}); 

	it('should change path to /forecast on clicking forecast button', function() {
		$location.path('/badPath');
		expect($location.path()).not.toBe('/forecast');
		home.goToForecast(); 
		expect($location.path()).toBe('/forecast');
	});

	it('should try to grab the user location immediately', function() {
		$location.path('home')
		$scope.$digest();  
		expect(home.geolocation).toEqual([1, 1]); 
	});

	describe('watchers', function(){

		it('should call locationService when city is changed', function() {

			var citySpy = spyOn(locationService, 'setCity'); 
			home.city = 'Portland'; 
			$scope.$digest();  
			expect(citySpy).toHaveBeenCalledWith('Portland'); 
		});

		it('should call locationService when geolocation is changed', function() {
			var geoSpy = spyOn(locationService, 'setGeolocation'); 
			$scope.$digest(); 
			expect(geoSpy).toHaveBeenCalledWith([1,1]); 			
		});
	});

});