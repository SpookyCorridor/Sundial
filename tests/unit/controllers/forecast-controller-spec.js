describe('Forecast Controller', function() {

	var $state, 
			$location,
			$rootScope,
			$scope,
			Forecast,
			mockForecastFactory;  

	beforeEach(function() {
		mockForecastFactory = {};

		module('Sundial', function($provide) {
			$provide.value('forecastFactory', mockForecastFactory); 
		}); 


		inject(function($q) {
			var city = 'city'; 

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

			mockForecastFactory.getForecast = function(city) {
				var defer = $q.defer(); 

				defer.resolve(this.data); 

				return defer.promise; 
			};

		});

		inject(function($controller, $rootScope, _forecastFactory_) {
			$scope = $rootScope.$new();
			forecastFactory = _forecastFactory_; 
			Forecast = $controller('ForecastController', 
				{ $scope : $scope, forecastFactory: forecastFactory });		
			
			$scope.$digest(); 
		});

	}); 

	describe('setForecast', function() {
 
		it('should set current to the current forecast data', function() {
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