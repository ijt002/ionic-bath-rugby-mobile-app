/**
 * Created by Sandeep on 31/08/14.
 */

angular.module('com.htmlxprs.socialAuth.controllers', [])
    .controller('LoginController', ['$scope', 'FIREBASE_REF', '$firebaseSimpleLogin', 'userSession', '$cordovaLocalNotification', 'socket', function($scope, FIREBASE_REF, $firebaseSimpleLogin, userSession, $cordovaLocalNotification, socket) {

        socket.on('orderDone', function(data) {
            if (data == userSession.user.uid) {
                $cordovaLocalNotification.add({
                    id: 'some_notification_id',
                    message: 'Your order is on its way',
                    title: 'Beer Ready'
                });
            }
        });
        userSession.auth = $firebaseSimpleLogin(new Firebase(FIREBASE_REF));

        $scope.login = function(provider) {
            userSession.auth.$login(provider);
        }

    }])
    .controller('RssIndexController', ['$scope', 'RssService', 'socket', '$cordovaLocalNotification', function($scope, RssService, socket, $cordovaLocalNotification) {
        RssService.all($scope);
    }])
    .controller('RssDetailController', ['$scope', '$stateParams', 'RssService', 'socket', function($scope, $stateParams, RssService, socket) {
        RssService.get($stateParams.rssId, $scope);
    }])
    .controller('TwitterCtrl', ['$scope', 'TwitterService', function($scope, TwitterService) {
        TwitterService.all($scope);
    }])
    .controller('BeerCtrl', ['$scope', 'userSession', 'BeerService', function($scope, userSession, BeerService) {
        $scope.AddItem = function(data) {
            BeerService.beerOrder(data.beerOrder, userSession.user.uid);
        }
    }])
    .controller('ManOfTheMatchController', ['$scope', 'ManOfTheMatchService', function($scope, ManOfTheMatchService) {
        $scope.players = ['Agulla.jpg', 'Auterac.jpg', 'Burgess.jpg', 'Day.jpg', 'Fa\'osiliva.jpg', 'Garvey.jpg', 'Houston.jpg', 'Louw.jpg',
            'Palma-Newport.jpg', 'Sisi.jpg', 'Thomas.jpg', 'Williams.jpg', 'Young.jpg', 'Arscott.jpg', 'Banahan.jpg', 'Catt.jpg', 'Devoto.jpg',
            'Fearns.jpg', 'Henson.jpg', 'James.jpg', 'Mercer.jpg', 'Rokoduguni.jpg', 'Spencer.jpg', 'Watson.jpg', 'Wilson.jpg', 'Attwood.jpg',
            'Batty.jpg', 'Cook.jpg', 'Eastmond.jpg', 'Ford.jpg', 'Hooper.jpg', 'Joseph.jpg', 'Orlandi.jpg', 'Shiells.jpg', 'Stringer.jpg',
            'Webber.jpg', 'Woodburn.jpg'
        ];
        $scope.VoteFor = function(player) {
            ManOfTheMatchService.vote(player.replace(".jpg", ""), function(data) {
                $scope.percentages = data;
            });
        };
    }]);
