// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('socialAuth', ['ionic', 'firebase', 'ngCordova', 'com.htmlxprs.socialAuth.controllers', 'com.htmlxprs.socialAuth.services'])

.run(function($ionicPlatform, $state, $rootScope, userSession) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }

        $state.go('login');

        $rootScope.$on('$firebaseSimpleLogin:login', function(event, user) {
            userSession.user = user;
            $state.go('tab.rss-index-tab');
        });

        $rootScope.$on('$firebaseSimpleLogin:error', function(event, error) {
            console.log('Error logging user in: ', error);
        });

        $rootScope.$on('$firebaseSimpleLogin:logout', function(event) {
            $state.go('login');
        });
    });
}).config(['$stateProvider', function($stateProvider) {

    $stateProvider.state('login', {
            url: '/login',
            controller: 'LoginController',
            templateUrl: 'views/login.html'
        })
        .state('tab', {
            url: '/tab',
            abstract: true,
            templateUrl: 'views/templates/tabs.html'
        })
        .state('tab.rss-index-tab', {
            url: '/rss',
            views: {
                'rss-tab': {
                    templateUrl: 'views/rss-index.html',
                    controller: 'RssIndexController'
                }
            }
        })
        .state('tab.rss-detail', {
            url: '/rssDetail/:rssId',
            views: {
                'rss-tab': {
                    templateUrl: 'views/rss-detail.html',
                    controller: 'RssDetailController'
                }
            }
        })
        .state('tab.twitter', {
            url: '/twitter',
            views: {
                'twitter-tab': {
                    templateUrl: 'views/twitter.html',
                    controller: 'TwitterCtrl'
                }
            }
        })
        .state('tab.beer', {
            url: '/orderBeer',
            views: {
                'beer-tab': {
                    templateUrl: 'views/beer.html',
                    controller: 'BeerCtrl'
                }
            }
        })
}]);
