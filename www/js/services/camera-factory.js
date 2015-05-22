angular.module('thrfitit.services',[])

//camera factory taken from : http://learn.ionicframework.com/formulas/cordova-camera/#
module.factory('Camera', ['$q', function CameraFactory ($q) {

  return {
    getPicture: function(options) {
      var q = $q.defer();

      navigator.camera.getPicture(function(result) {
        // Do any magic you need
        q.resolve(result);
      }, function(err) {
        q.reject(err);
      }, options);

      return q.promise;
    }
  }
}]);