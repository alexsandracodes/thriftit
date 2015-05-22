// Ionic thriftit App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'thriftit' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'thriftit.controllers' is found in controllers.js


// var fb = new Firebase("https://thriftit.firebaseio.com/gallery");

angular.module('thriftit', ['ionic', 'ngCordova','thriftit.controllers','thriftit.services','firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
  //for more info on stateProvider, see: https://github.com/angular-ui/ui-router/wiki/Quick-Reference#statename
  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/pages/menu/index.html",
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: "/search",
    views: {
      //this is the nested view from templates/pages/menu/index.html: <ion-nav-view name="menuContent"></ion-nav-view>
      'menuContent': {
        templateUrl: "templates/pages/search/index.html"
      }
    }
  })

  .state('app.gallery', {
    url: "/gallery",
    views: {
      'menuContent': {
        templateUrl: "templates/pages/gallery/index.html",
        controller: 'GalleryCtrl'
      }
    }
  })
    

  .state('app.addit', {
    url: "/addit",
    views: {
      'menuContent': {
        templateUrl: "templates/pages/addit/index.html",
        controller: 'AdditCtrl'
      }
    }
  })
    .state('app.playlists', {
      url: "/playlists",
      views: {
        'menuContent': {
          templateUrl: "templates/playlists.html",
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: "/playlists/:playlistId",
    views: {
      'menuContent': {
        templateUrl: "templates/playlist.html",
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/gallery');
});


