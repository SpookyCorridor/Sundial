describe('locationServices', function() {
	var city, 
			service; 

	beforeEach(function() {
		module("Sundial.services");

		inject(function (_locationService_) {
			service = _locationService_; 
		})	
	});

	describe('setCity()', function() { 

		it('should set the city if it is a string', function() {
			service.setCity('New York, NY');
			expect(service.city).toBe('New York, NY');
		});

		it('should set the city to Chicago, IL if not given a string', function() {
			service.setCity(1); 
			expect(service.city).toBe('Chicago, IL'); 
		});
	});


	describe('getCity()', function() {

		it('should return the correct city', function() {
			service.setCity('Tokyo, Japan');
			expect(service.getCity()).toBe('Tokyo, Japan');
		});

	});

});