describe('Sundial.routes', function() {

	var $state,
			$rootScope,
			testRoute;

	function goTo(url) {
		$location.url(url);
		$rootScope.$digest();
	}

	beforeEach(module('Sundial')); 

	beforeEach(inject(function(_$state_, $templateCache, _$rootScope_, _$location_) {
		$state = _$state_;
		$rootScope = _$rootScope_; 
		$templateCache.put('views/tpl/home.html', '');
		$templateCache.put('views/tpl/404.html', '');
		$location = _$location_; 
	})); 

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

	describe('404 state', function() {
		it('should go to 404 state on bad URL', function() {
			goTo('aBadUrl');
			expect($state.current.name).toBe('404'); 
		})
	})
	

})