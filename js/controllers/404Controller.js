angular.module('myApp')
.controller("404Controller", function ($scope, $routeParams){
      $scope.errorMessage = $routeParams.error
});