describe('Sundial.routes', function() {

	var $state,
			$rootScope,
			testState;

	beforeEach(module('Sundial')); 

	beforeEach(inject(function(_$state_, $templateCache, _$rootScope_) {
		$state = _$state_;
		$rootScope = _$rootScope_; 
		$templateCache.put('views/tpl/home.html', '');
	})); 

		it('should redirect to home on blank', function() {
			testState = 'home'; 
			$state.go(testState); 
			$rootScope.$digest(); 
			expect($state.href(testState)).toBe('#/home')
		});

})