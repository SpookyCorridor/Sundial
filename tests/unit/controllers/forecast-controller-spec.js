describe('Forecast Controller', function() {

	var $state, 
			$location,
			$rootScope,
			$scope,
			Forecast,
			mockForecastFactory;  

	beforeEach(function() {
		mockForecastFactory = {};
		mockLocationService = jasmine.createSpyObj('locationService', ['getMode', 'getCity', 'getGeolocation']);

		module('Sundial', function($provide) {
			$provide.value('forecastFactory', mockForecastFactory); 
			$provide.value('locationService', mockLocationService); 
		}); 


		inject(function($q) {
			var city = 'city'; 
			var mockGetForecast = jasmine.createSpy('getForecast'); 

			mockForecastFactory.data = [
				{
					city: {
						id: 1, 
						name: 'city'
					},
					list: [
						{ },
						{ }
					]
				}
			];

			mockForecastFactory.getForecast = mockGetForecast.and.callFake(function(method){
				var defer = $q.defer(); 

				defer.resolve(this.data); 

				return defer.promise; 
			});

		}); 	

		inject(function($controller, $rootScope, _forecastFactory_, _locationService_) {
			$scope = $rootScope.$new();
			forecastFactory = _forecastFactory_; 
			locationService = _locationService_; 
			Forecast = $controller('ForecastController', 
				{ $scope : $scope, forecastFactory: forecastFactory, locationService: locationService });		
		});

	}); 

	describe('init', function() {

		it('should request resources from locationService', function(){
			expect(locationService.getMode).toHaveBeenCalled();
			expect(locationService.getCity).toHaveBeenCalled();
			expect(locationService.getGeolocation).toHaveBeenCalled();
		});

		

		it('should request the forecast', function(){
			expect(forecastFactory.getForecast).toHaveBeenCalled(); 
		})

	}); 

	describe('setForecast', function() {
 		
 		beforeEach(function(){
 			$scope.$digest(); 
 		})
		it('should set the current forecast data', function() {
			Forecast.setForecast();
			$scope.$digest();
			expect(Forecast.current).toEqual([
			{
				city: {
					id: 1, 
					name: 'city'
				},
				list: [
					{ },
					{ }
				]
			}
		]);
		});

	});

});