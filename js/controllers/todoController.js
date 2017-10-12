angular.module('myApp')
.controller('todoController', function($scope,todoService){
    $scope.todoAction;
    $scope.todolist = todoService.getTodoList();
    $scope.newTodo = function(){
      if(
        $scope.todoAction   == null || $scope.todoAction   == ""   ){
        return console.log('fail to return value');
      }else{
        todoService.newTodo(
          $scope.todoAction
        );
        $scope.todoAction = null;
      }
    }
    $scope.deleteTask = function(deletedItem){
      todoService.deleteTask(deletedItem);
    }
})