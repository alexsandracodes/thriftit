angular.module('thriftit.controllers', ['firebase'])
//controller for camera taken from: http://learn.ionicframework.com/formulas/cordova-camera/#
.controller("AdditCtrl", function($scope, Camera, $firebaseObject) {
    $scope.getPhoto = function() {
    Camera.getPicture().then(function(imageURI) {
      console.log(imageURI);
    }, function(err) {
      console.err(err);
    });
	};
});