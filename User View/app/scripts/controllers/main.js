'use strict';

angular.module('userViewApp')
  .controller('MainCtrl', function ($scope, $firebase) {
    var menu = new Firebase('https://menuapp.firebaseio.com/MenuItems');
    var categories = new Firebase('https://menuapp.firebaseio.com/Category');

    $scope.menuItems = $firebase(menu);
    $scope.categories = $firebase(categories);

  });
