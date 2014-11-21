/**
 * Created by Sandeep on 31/08/14.
 */
var httpUrl = "http://nodejs-adben.rhcloud.com/";

var products = [{
    id: 1,
    title: "Bath Rugby 2014/15 Home Short Sleeve Shirt",
    price: "55.00",
    description: "Show your support this season with the official Bath Rugby Authentic Home Shirt. The blue, black and white hoops offer a traditional touch to this modern rugby shirt.",
    picture: "img/shop/09-009.jpg"
}];

angular.module('com.htmlxprs.socialAuth.services', [])
    .value('FIREBASE_REF', 'https://social-auth.firebaseio.com')
    .value('userSession', {})
    .factory('RssService', function($http) {
        // Might use a resource here that returns a JSON array

        return {
            all: function($scope) {
                $http.get(httpUrl + 'news')
                    .then(
                        function(resp) {
                            $scope.allRss = resp.data;
                        },
                        function(err) {
                            console.error('ERR', err);
                        });
            },
            get: function(rssId, $scope) {

                $http.get(httpUrl + 'news/' + rssId)
                    .then(
                        function(resp) {
                            $scope.rss = resp.data;
                        },
                        function(err) {
                            console.error('ERR', err);
                        });
            }
        }
    })
    .factory('TwitterService', function($http) {
        return {
            all: function($scope) {
                $http.get(httpUrl + 'twitter')
                    .then(
                        function(resp) {
                            $scope.tweets = resp.data;
                        },
                        function(err) {
                            console.error('ERR', err);
                        });
            }
        }
    })
    .factory('BeerService', function($http) {
        return {
            beerOrder: function(beer, userUid) {
                $http({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url: httpUrl + 'api/todos',
                    method: "POST",
                    data: {
                        text: beer,
                        user: userUid
                    }
                });
            }
        }
    })
    .factory('ManOfTheMatchService', function($http) {
        return {
            vote: function(player, callback) {
                $http.get(httpUrl + 'vote/' + player);
                $http.get(httpUrl + 'votePercentages')
                    .success(function(data) {
                        callback(data)
                    });
            }
        }
    })
    .factory('RegistrationService', function($http) {
        return {
            register: function(registrationId) {
                $http({
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    url: httpUrl + 'register',
                    method: "POST",
                    data: {
                        id: registrationId
                    }
                });
            }
        }
    })
    .factory('ShopService', function($http) {
        return {
            allProducts: function(callback) {
                callback(products);
            },
            product: function(id, callback) {
                for (var idx in products) {
                    var product = products[idx];
                    if (product.id === parseInt(id, 10)) {
                        callback(product);
                        return;
                    }
                }
            }
        }
    });
