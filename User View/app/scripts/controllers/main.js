'use strict';

angular.module('userViewApp')
  .controller('MainCtrl', function ($scope, $firebase, $rootScope) {
    var menu = new Firebase('https://menuapp.firebaseio.com/MenuItems');
    var categories = new Firebase('https://menuapp.firebaseio.com/Category');

    menu.on('value', function(dataSnapshot) {
        $scope.menuItems = dataSnapshot.val();
      });

    $scope.categories = $firebase(categories);
    
    $scope.menuItemArray = (function() {
    	var itemArray = [];
    	for(var item in $scope.menuItems) {
    		itemArray.push($scope.menuItems[item]);
    	}
    	return itemArray;
    })();

    $scope.chooseCategory = function(categ) {
    	$rootScope.categoryChoice = categ.name;
    	console.log($scope.categoryChoice)
	};

  });