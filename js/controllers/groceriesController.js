angular.module('myApp')
.controller('groceriesController', function($scope,groceriesService){
    $scope.groceryItem;
    $scope.groceryPrice;
    $scope.groceryAisle;
    $scope.grocerySku;
    $scope.groceries = groceriesService.getNames();
    $scope.newItem = function(){
      if(
        $scope.groceryItem  == null || $scope.groceryItem  == ""   ||
        $scope.groceryPrice == null || $scope.groceryPrice == ""   ||
        $scope.groceryAisle == null || $scope.groceryAisle == ""   ||
        $scope.grocerySku   == null || $scope.grocerySku   == ""
      ){
        return console.log('fail to return value');
      }else{
        groceriesService.newItem(
          $scope.groceryItem,
          $scope.groceryPrice,
          $scope.groceryAisle,
          $scope.grocerySku
        );
        $scope.groceryItem  = null;
        $scope.groceryPrice = null;
        $scope.groceryAisle = null;
        $scope.grocerySku   = null;
      }
    }
    $scope.deleteItem = function(deletedItem){
      groceriesService.deleteItem(deletedItem);
    }
  })