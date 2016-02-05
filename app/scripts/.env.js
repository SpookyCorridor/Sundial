angular.module('Sundial').

provider('SundialConfig', function () {
    var values = {
      openWeatherKey: '9799272acfac7a938ca66f9e3b869899'
    };
    return {
      set: function (constants) {
        angular.extend(values, constants);
      },
      $get: function () { 
        return values;
      }
    };
  })