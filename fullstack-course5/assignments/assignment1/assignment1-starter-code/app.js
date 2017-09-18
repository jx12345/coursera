(function () {
  'use strict';

  angular.module('LunchApp', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.list = 'jim, test, tww';

    $scope.check = function() {
      if ($scope.list === '') {
        $scope.message = 'Please enter data first';
      } else if ($scope.list.split(',').length > 3) {
        $scope.message = "Too much";
      } else {
        $scope.message = "Enjoy!";
      }
    }
  }
})();
