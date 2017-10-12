angular.module('myApp')
.controller('todoController', function($scope,todoService){
    $scope.todoAction;
    $scope.todolist = todoService.getTodoList();
    $scope.newTodo = function(){
      // --------------------------------------------------------------
      // - If Null don't save, else save to local
      // --------------------------------------------------------------
      if(
        $scope.todoAction   == null || $scope.todoAction   == ""   ){
        return console.log('fail to return value');
      }else{
        todoService.newTodo(
          $scope.todoAction
        );
      // --------------------------------------------------------------
      // - Reset values after saving
      // --------------------------------------------------------------
        $scope.todoAction = null;
      }
    }
    // --------------------------------------------------------------
    // - Deletes Listing
    // --------------------------------------------------------------
    $scope.deleteTask = function(deletedItem){
      todoService.deleteTask(deletedItem);
    }
})