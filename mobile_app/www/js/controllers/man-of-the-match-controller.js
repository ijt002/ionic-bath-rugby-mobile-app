(function(MainController) {

    MainController.module
        .controller('ManOfTheMatchController', ['$scope', '$cordovaLocalNotification', 'ManOfTheMatchService', function($scope, $cordovaLocalNotification, ManOfTheMatchService) {
            MainController.handleNotification($scope, $cordovaLocalNotification);
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

})(MainController);
