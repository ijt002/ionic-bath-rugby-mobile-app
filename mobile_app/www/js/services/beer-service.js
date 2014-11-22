(function(MainService) {

    MainService.module
        .factory('BeerService', function($http) {
            return {
                beerOrder: function(beer, userUid) {
                    $http({
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        url: MainService.httpUrl + 'api/todos',
                        method: "POST",
                        data: {
                            text: beer,
                            user: userUid
                        }
                    });
                }
            }
        });

})(MainService);
