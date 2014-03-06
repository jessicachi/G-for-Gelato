'use strict';

angular.module('userViewApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ngAnimate',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/items', {
        templateUrl: 'views/items.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })

  .run(function($rootScope, $location, $http) {
  // Here be global functions and variables
  $rootScope.$on('$routeChangeSuccess', function () {
    $rootScope.myPage = $location.path().substring($location.path().indexOf('/', 1)).replace("/","");
    window.scrollTo(0,0);
  });
});
