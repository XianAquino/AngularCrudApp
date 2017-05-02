'use strict',

angular.module('employees').
  factory('Employees', function($resource){
    var url = '/employees'
    return $resource(url, {}, {
      query: {
        method: 'GET',
        params: {},
        isArray: true,
        cache: true
      }
    })
  });
