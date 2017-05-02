'use strict'

angular.module('employeeList').
  component('employeeList', {
    templateUrl:'/templates/employeeList.html',
    controller: function(Employees, $scope) {
      // $scope.employees = [
      //   {"ID":1,"NAME":"xian","POSITION":"CTO","MANAGER":null,"subordinates":[
      //     {"ID":3,"NAME":"john","POSITION":"Backend developer","MANAGER":1},
      //     {"ID":4,"NAME":"bob","POSITION":"Frontend  developer","MANAGER":1},
      //     {"ID":5,"NAME":"alice","POSITION":"Devops Engineer","MANAGER":1},
      //     {"ID":11,"NAME":"Brad","POSITION":"Lead Engineer","MANAGER":1}
      //   ]},
      //   {"ID":2,"NAME":"barbara","POSITION":"HR Lead","MANAGER":null,"subordinates":[
      //     {"ID":6,"NAME":"myka","POSITION":"HR Associate","MANAGER":2},
      //     {"ID":7,"NAME":"muzaka","POSITION":"HR Associate","MANAGER":2},
      //     {"ID":8,"NAME":"chloe","POSITION":"HR Associate","MANAGER":2 ,"subordinates": [
      //         {"ID":13,"NAME":"Grid","POSITION":"HR Trainee","MANAGER":8},
      //         {"ID":14,"NAME":"mile","POSITION":"HR Trainee","MANAGER":8},
      //       ]}
      //   ]},
      //   {"ID":9,"NAME":"Chris","POSITION":"COO","MANAGER":null,"subordinates":[]}
      // ];

      $scope.employees = Employees.query();
    }
  });
