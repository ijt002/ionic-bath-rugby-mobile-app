(function(MainService) {

    var products = [{
        id: 1,
        title: "Bath Rugby 2014/15 Home Short Sleeve Shirt",
        price: "55.00",
        description: "Show your support this season with the official Bath Rugby Authentic Home Shirt. The blue, black and white hoops offer a traditional touch to this modern rugby shirt.",
        picture: "img/shop/09-009.jpg"
    }];

    MainService.module
        .factory('ShopService', function() {
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

})(MainService);
