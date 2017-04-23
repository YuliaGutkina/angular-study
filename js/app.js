(function(){
  var app = angular.module('gemStore', ['store-directives']);

  app.controller('StoreController', function($http){
    var store = this;
    store.products = [];

    $http.get('/store-products.json').then(
      function getSuccess(response){
        store.products = response.data;
      },
      function getError(){
        console.log('aaaaa!!! where is json???!!!');
      }
    );
  });

  app.controller('ReviewController', function(){
    this.review = {};

    this.addReview = function(product){
      product.reviews.push(this.review);
      this.review = {};
    };
  });
})();
