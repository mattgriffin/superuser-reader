angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  //$scope.loginData = {};

  // Create the login modal that we will use later
  //$ionicModal.fromTemplateUrl('templates/login.html', {
  //  scope: $scope
  //}).then(function(modal) {
  //  $scope.modal = modal;
  //});

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller("FeedController", function($http, $scope) {
    $scope.init = function() {
        $http.get("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20xml%20where%20url%20%3D%20'http%3A%2F%2Fsuperuser.openstack.org%2Ffeed%2F'&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys")
            .success(function(data) {
                $scope.rssTitle = data.query.results.rss.channel.title;
                //$scope.rssUrl = data.query.results.rss.channel.feedUrl;
                //$scope.rssSiteUrl = data.responseData.feed.link;
                $scope.entries = data.query.results.rss.channel.item;
            })
            .error(function(data) {
                console.log("ERROR: " + data);
            });
    }

    $scope.browse = function(v) {
        window.open(v, "_blank", "location=yes,toolbar=yes,enableViewportScale=yes,closebuttoncaption=Close,transitionstyle=fliphorizontal");
    }
})

.controller('ArticlesCtrl', function($scope) {
  $scope.articles = [
    { title: 'Article 1', id: 1 },
    { title: 'Article 2', id: 2 },
    { title: 'Article 3', id: 3 },
    { title: 'Article 4', id: 4 },
    { title: 'Article 5', id: 5 },
    { title: 'Article 6', id: 6 }
  ];
})

.controller('ArticleCtrl', function($scope, $stateParams) {
});
