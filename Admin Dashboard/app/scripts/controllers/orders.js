'use strict';

angular.module('appApp')
  .controller('OrdersCtrl', function ($scope, $firebase) {
  	var orders = new Firebase('https://menuapp.firebaseio.com/Orders');
  	$scope.orders = $firebase(orders);
  });
