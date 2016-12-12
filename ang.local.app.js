var app = angular.module('myApp', []);

app.controller('myCtrl', ['$scope', function($scope){
    
    /*$scope.item = 'variable item';
    
    $scope.showP2 = false;
    
    $scope.setItem2 = function (value){
        $scope.item2 = value;
    }*/
    
    $scope.priceTitle = 'Прайслист';
    $scope.priceDate = '2016-12-12';
    $scope.priceOrder = 'name';
    $scope.reverse = true;
    $scope.setOrder = function(order){
        $scope.reverse = (priceOrder === order)? $scope.reverse : false;
        $scope.priceOrder = order;
    };
    
    $scope.pricelist = [
        {
            name: 'Апельсин',
            price: 2,
            discount: 0.1,
            cart: "img/work1.jpg"
        },
        {
            name: 'Яблоко',
            price: 6,
            discount: 0.5,
            cart: "img/work2.jpg"
        },
        {
            name: 'Вишня',
            price: 1,
            discount: 0,
            cart: "img/work3.jpg"
        },
        {
            name: 'Груша',
            price: 5,
            discount: 0.3,
            cart: "img/work4.jpg"
        },
        {
            name: 'Арбуз',
            price: 8,
            discount: 0.8,
            cart: "img/work5.jpg"
        }
    ]
    
}]);
