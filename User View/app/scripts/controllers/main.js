'use strict';

angular.module('userViewApp')
  .controller('OrderCtrl', function ($scope, $firebase, $rootScope){
    var orders = new Firebase('https://menuapp.firebaseio.com/Orders');

    $scope.myPlate = [];
    $scope.myTotal = 0;

    $scope.$on('addToPlate', function(name, item){
        $scope.myPlate.push(item);
        $scope.myTotal += item.price;
    });
    $scope.removeFromPlate = function(obj, arr){
        $scope.myTotal -= obj.price;
        arr.splice(arr.indexOf(obj), 1);
    }
    $scope.order = function(){
        var myOrder = {
            'table': $scope.tableNum,
            'order': $scope.myPlate,
            'total': $scope.myTotal
        }
        orders.push(angular.fromJson(angular.toJson(myOrder)));
        $scope.myPlate.length = 0;
        $scope.myTotal = 0;
        delete $scope.tableNum;
    };

  })
  .controller('MainCtrl', function ($scope, $firebase, $rootScope) {
    var menu = new Firebase('https://menuapp.firebaseio.com/MenuItems');
    var categories = new Firebase('https://menuapp.firebaseio.com/Category');

    menu.on('value', function(dataSnapshot) {
        $scope.menuItems = dataSnapshot.val();
      });
    $scope.menuItemArray = (function() {
    	var itemArray = [];
    	for(var item in $scope.menuItems) {
    		itemArray.push($scope.menuItems[item]);
    	}
    	return itemArray;
    })();

    $scope.categories = $firebase(categories);
    
    $scope.chooseCategory = function(categ) {
    	$rootScope.categoryChoice = categ.name;
	};

    $scope.addToPlate = function(item){
        $rootScope.$broadcast('addToPlate', item);
    };
  })

.directive('backImg', function(){
    return function(scope, element, attrs){
        attrs.$observe('backImg', function(value) {
            element.css({
                'background-image': 'url(' + value +')',
                'background-size' : 'cover'
            });
        });
    };
});