describe('geolocationFactory', function(){
	var Geolocation,
			mockLocation,
			$window,
			deferred; 

	beforeEach(function(){
		mockWindow = {navigator:{geolocation:{}}};

		module('Sundial.factories', function($provide) {
			$provide.value('$window', mockWindow); 
		});

		inject(function($q, _$window_, _geolocationFactory_) {
			$window = _$window_; 
			Geolocation = _geolocationFactory_; 
			deferred = $q.defer(); 

			mockWindow.navigator.geolocation.getCurrentPosition = function() {
				deferred.resolve({position: {lat: '1', long: '2'}}); 
				return deferred.promise; 
			}
		}); //end inject
	}); // end beforeEach

		describe('getLocation()', function() {
			
			it('should return lat and long from $window', function() {
				var position = Geolocation.getGeolocation().then(function(){
					expect(position).toEqual(
					{position: {lat: '1', long: '2'}}
					);
				}); 				
			});

			it('should call getCurrentPosition() from $window', function() {
				var spy = spyOn($window.navigator.geolocation, 'getCurrentPosition'); 
				Geolocation.getGeolocation(); 
				expect(spy).toHaveBeenCalled();  
			});

		});
	});  