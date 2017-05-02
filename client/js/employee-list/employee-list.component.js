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
      $scope.showEmployeeForm = false;

      $scope.delete = function (scope) {
        var empId = scope.$modelValue.ID;
        Employees.remove({id: empId})
        scope.remove();
     };

     $scope.toggle = function (scope) {
        scope.toggle();
     };

     $scope.moveLastToTheBeginning = function () {
        var a = $scope.employees.pop();
        $scope.employees.splice(0, 0, a);
     };

     $scope.submitNewEmployee = function() {
        Employees.save($scope.newEmployee, function(result) {
          $scope.newEmployee.ID = result.ID;
          $scope.newEmployee.subordinates = [];
          $scope.manager.subordinates.push($scope.newEmployee);

          resetForm();
        });
     }

     var resetForm = function() {
       $scope.newEmployee = {
         NAME: '',
         POSITION: ''
       };
     }

     $scope.newEmployeeForm = function(scope) {
       resetForm();
       $scope.showEmployeeForm = true;
       $scope.manager = scope.$modelValue;
       $scope.newEmployee.MANAGER = $scope.manager.ID;
     }

     $scope.collapseAll = function () {
       $scope.$broadcast('angular-ui-tree:collapse-all');
     };

     $scope.expandAll = function () {
       $scope.$broadcast('angular-ui-tree:expand-all');
     };
    }
  });
