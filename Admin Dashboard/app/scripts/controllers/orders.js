'use strict';

angular.module('appApp')
  .controller('OrdersCtrl', function ($scope, $firebase) {
  	var orders = new Firebase('https://menuapp.firebaseio.com/Orders');
  	$scope.orders = $firebase(orders);
  	
  	$scope.confirmOrder = function(key, order){
  		order.confirmed = true;
  		// var currentOrder = $scope.orders.$child(key);
  		$scope.orders.$save(key);
  	};
  	$scope.deleteOrder = function(key){
  		$scope.orders.$remove(key);
  	};
  });
