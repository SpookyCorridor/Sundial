describe('locationServices', function() {
	var city, 
			service; 

	beforeEach(function() {
		module("Sundial.services");

		inject(function (_locationService_) {
			service = _locationService_; 
		})	

	});

	describe('Setting a city', function() { 

		it('should set the city if it is a string', function() {
			service.setCity('New York, NY');
			expect(service.getCity()).toBe('New York, NY');
		});

		it('should set the city to Chicago, IL if not given a string', function() {
			service.setCity(1); 
			expect(service.getCity()).toBe('Chicago, IL'); 
		});

	});


	describe('Getting a city', function() {

		it('should return the correct city', function() {
			service.setCity('Tokyo, Japan');
			expect(service.getCity()).toBe('Tokyo, Japan');
		});

	});

	describe('Geolocation', function(){

		it('can be set', function() {
			geoSpy = spyOn(service, 'setGeolocation');
			service.setGeolocation([1,2]);
			expect(geoSpy).toHaveBeenCalledWith([1,2]); 
		});

		it('can be retrieved', function() {
			service.setGeolocation([1,2]);
			expect(service.getGeolocation()).toEqual([1,2]);
		});

	});

});