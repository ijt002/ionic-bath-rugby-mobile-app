(function(MainController) {

    MainController.module
        .controller('AboutController', ['$scope', '$cordovaLocalNotification', 'userSession', function($scope, $cordovaLocalNotification, userSession) {
            MainController.handleNotification($scope, $cordovaLocalNotification);
            $scope.logout = function() {
                userSession.auth.$logout();
            }
        }]);

})(MainController);
