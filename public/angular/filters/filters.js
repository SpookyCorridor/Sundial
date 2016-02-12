angular.module('Sundial.filters', []).

filter('convertKelvin', function() {
  return function(kelvin, type) {
    type = type || 'f'; 

    if (type === 'f') {
      return Math.round( (kelvin * (1.8) - 459.67) );
    };

  };
}); 