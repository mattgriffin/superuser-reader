// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'angularMoment'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.articles', {
    url: '/articles',
    views: {
      'menuContent': {
        templateUrl: 'templates/articles.html',
        controller: 'ArticlesCtrl'
      }
    }
  })

  .state('app.single', {
  url: '/articles/:articleId',
  views: {
    'menuContent': {
      templateUrl: 'templates/article.html',
      controller: 'ArticleCtrl'
    }
  }
  })

  .state('app.summit', {
    url: '/summit',
    views: {
      'menuContent': {
        templateUrl: 'templates/summit.html'
      }
    }
  })

  .state('app.planet', {
    url: '/planet',
    views: {
      'menuContent': {
        templateUrl: 'templates/planet.html'
      }
    }
  })

  .state('app.ask', {
    url: '/ask',
    views: {
      'menuContent': {
        templateUrl: 'templates/ask.html'
      }
    }
  })

  .state('app.marketplace', {
    url: '/marketplace',
    views: {
      'menuContent': {
        templateUrl: 'templates/marketplace.html'
      }
    }
  })

  .state('app.about-openstack', {
    url: '/about-openstack',
    views: {
      'menuContent': {
        templateUrl: 'templates/about-openstack.html'
      }
    }
  })

  .state('app.about-app', {
    url: '/about-app',
    views: {
      'menuContent': {
        templateUrl: 'templates/about-app.html'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/articles');
});
