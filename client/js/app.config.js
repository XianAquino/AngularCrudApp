'use strict'

angular.module('manager').
  config(
    function(
      $locationProvider,
      $routeProvider
    ){
      $locationProvider.html5Mode({ enabled: true });
      $routeProvider.
        when('/', {
          template:  '<employee-list></employee-list>'
        }).
        when('/employee/:id', {
          template:  '<h1>Employee: </h1>'
        }).
        otherwise({
          template: 'Not Found'
        })
    }
  );
