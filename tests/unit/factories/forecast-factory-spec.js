describe('forecastFactory', function() {
	var Forecast,
			weatherKey,
			SundialConfig,
			httpBackend,
			mockGetForecast, 
			prepareCity,
			apiQuery = 'http://api.openweathermap.org/data/2.5/forecast/daily?&appid=123&callback=JSON_CALLBACK&cnt=1&q=city';

	beforeEach(function() {
		module("Sundial"); 

		inject(function ($location, _forecastFactory_, _$httpBackend_, _$q_, _$http_) {
			Forecast        = _forecastFactory_;
			$httpBackend    = _$httpBackend_;
			$http           = _$http_;
			prepareCity     = spyOn(Forecast, 'prepareCity').and.returnValue('city');
			mockGetForecast = spyOn(Forecast, 'getForecast').and.callFake(function(){
	  		var preparedCity = Forecast.prepareCity('city'); 
	  		var params       = { params : {
	  				appid: '123',
	       	 	q: 'city',
	       	 	cnt: 1,   
	       	 	callback: 'JSON_CALLBACK'
	       	 }
	  		}; 
      	$http.jsonp('http://api.openweathermap.org/data/2.5/forecast/daily?', params);
			});
		}); 
	}); 

	describe('init', function() {
			it('should have a weatherKey variable', function() {
				expect(Forecast.dayCnt).toBe(1) 
			});
		});

	describe('getForecast()', function() {	
		beforeEach(function() {
			$httpBackend.expectJSONP(apiQuery).respond({}); 
			Forecast.getForecast('city'); 
			$httpBackend.flush(); 
		});

		afterEach(function() {
     $httpBackend.verifyNoOutstandingExpectation();
     $httpBackend.verifyNoOutstandingRequest();
   });

		it('should recieve a parameter', function() {
			expect(mockGetForecast).toHaveBeenCalledWith('city'); 
		});  

		it('should call prepareCity()', function() {
			expect(prepareCity).toHaveBeenCalledWith('city'); 
		});
	});

});