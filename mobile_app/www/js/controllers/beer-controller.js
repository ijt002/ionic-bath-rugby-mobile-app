(function(MainController) {

    MainController.module
        .controller('BeerCtrl', ['$scope', 'userSession', 'BeerService', '$cordovaLocalNotification', function($scope, userSession, BeerService, $cordovaLocalNotification) {
            MainController.handleNotification($scope, $cordovaLocalNotification);
            $scope.AddItem = function(data) {
                BeerService.beerOrder(data.beerOrder, userSession.regid);
            }
        }]);

})(MainController);
