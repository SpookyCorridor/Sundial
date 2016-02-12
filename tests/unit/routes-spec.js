describe('Sundial.routes', function() {

	var $state,
			$rootScope,
			testRoute;

	function goTo(url) {
		$location.url(url);
		$rootScope.$digest();
	}

	beforeEach(function(){
		module('Sundial'); 

		inject(function(_$state_, _$templateCache_, _$rootScope_, _$location_) {
			$state         = _$state_;
			$rootScope     = _$rootScope_;
			$location      = _$location_;
			$templateCache = _$templateCache_;

			$templateCache.put('views/home.html', ''); 
			$templateCache.put('views/forecast.html', ''); 
			$templateCache.put('views/404.html', '');
		}); 
	}); 

	describe('home state', function() {
		it('should go to home state on blank', function() {
			testRoute = ""; 
			goTo(testRoute); 
			expect($state.current.name).toBe('home'); 
		});

		it('should go to home state on "/"', function() {
			testRoute = "/"; 
			goTo(testRoute); 
			expect($state.current.name).toBe('home'); 
		});
	});

	describe('forecast state', function() {
		it('should be go to forecast state on "/forecast"', function() {
			testRoute = "/forecast";
			goTo(testRoute);
			expect($state.current.name).toBe('forecast')
		})
	});

	describe('404 state', function() {
		it('should go to 404 state on bad URL', function() {
			goTo('aBadUrl');
			expect($state.current.name).toBe('404'); 
		})
	})
	

})