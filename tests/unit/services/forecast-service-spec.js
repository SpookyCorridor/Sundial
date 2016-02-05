describe('forecastService', function() {
	var Forecast,
			weatherKey,
			SundialConfig,
			httpBackend,
			prepareCity;

	beforeEach(function() {
		module("Sundial"); 

		inject(function ($location, _forecastService_, _$httpBackend_, _$q_) {
			Forecast = _forecastService_; 
			$httpBackend = _$httpBackend_;
      $httpBackend.when('JSONP', "http://api.openweathermap.org/data/2.5/forecast/daily?&appid=9799272acfac7a938ca66f9e3b869899&callback=JSON_CALLBACK&cnt=1&q=city").respond([{one: 'two'}]);
      prepareCity = spyOn(Forecast, 'prepareCity').and.returnValue('city');
		});
	}); 

	describe('init', function() {
			it('should have a weatherKey variable', function() {
				expect(Forecast.dayCnt).toBe(1) 
			});
		});

	describe('getForecast()', function() {	
		it('should call the prepareCity()', function() {
			$httpBackend.expectJSONP('http://api.openweathermap.org/data/2.5/forecast/daily?&appid=9799272acfac7a938ca66f9e3b869899&callback=JSON_CALLBACK&cnt=1&q=city'); 
			Forecast.getForecast('city'); 
			$httpBackend.flush(); 
			
			expect(prepareCity).toHaveBeenCalledWith('city'); 
		});  
	});

});