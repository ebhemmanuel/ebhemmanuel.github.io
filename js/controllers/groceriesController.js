angular.module('myApp')
.controller('groceriesController', function($scope,groceriesService){
    // --------------------------------------------------------------
    // - Setting the scope for the input fields
    // --------------------------------------------------------------
    $scope.groceryItem;
    $scope.groceryPrice;
    $scope.groceryAisle;
    $scope.grocerySku;
    $scope.groceries = groceriesService.getNames();
    // --------------------------------------------------------------
    // - on ng-click newItem save the input fields to localStorage
    // --------------------------------------------------------------
    $scope.newItem = function(){
      // --------------------------------------------------------------
      // - If Null don't save, else save to local
      // --------------------------------------------------------------
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
      // --------------------------------------------------------------
      // - Reset values after saving
      // --------------------------------------------------------------
        $scope.groceryItem  = null;
        $scope.groceryPrice = null;
        $scope.groceryAisle = null;
        $scope.grocerySku   = null;
      }
    }
    // --------------------------------------------------------------
    // - Deletes Listing
    // --------------------------------------------------------------
    $scope.deleteItem = function(deletedItem){
      groceriesService.deleteItem(deletedItem);
    }
  })