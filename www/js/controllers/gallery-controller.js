angular.module('thriftit.controllers', ["firebase"])
.controller("GalleryCtrl", function($scope, $firebaseObject) {
  var imgsRef = new Firebase("https://thriftit.firebaseio.com/gallery");

  // download the product data into a local object
  $scope.products = $firebaseObject(imgsRef);

  // putting a console.log here won't work, see below
})