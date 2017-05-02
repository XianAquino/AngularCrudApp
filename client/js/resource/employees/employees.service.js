'use strict',

angular.module('employees').
  factory('Employees', function($resource){
    var url = '/employees/:id'
    return $resource(url, { id:'@id' }, {
      query: {
        method: 'GET',
        params: {},
        isArray: true,
        cache: true
      },
      save: {
        method: 'POST',
        params: {
          "ID": '@id',
          "NAME": '@name',
          "POSITION": '@position'
        },
      },
      remove: {
        method: 'DELETE'
     }
    })
  });
