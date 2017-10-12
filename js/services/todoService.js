angular.module('myApp')
.service('todoService', function(){
  // --------------------------------------------------------------
  // - Default Array
  // --------------------------------------------------------------
  var todoList = ['Clean the car', 'Go running.'];
  // --------------------------------------------------------------
  // - Get List
  // --------------------------------------------------------------
  this.getTodoList = function(){
    var str = localStorage.getItem("toLS");
    todo = JSON.parse(str) || todoList;
    return todoList;
  }
  // --------------------------------------------------------------
  // - Set item into localStorage
  // --------------------------------------------------------------
  this.newTodo = function(pAction){
    todoList.push(pAction);
    var str = JSON.stringify(todoList);
    localStorage.setItem("toLS",str);
  }
  // --------------------------------------------------------------
  // - Delete item from localStorage
  // --------------------------------------------------------------
  this.deleteTask = function(pName){
    var idx = todoList.indexOf(pName);
    todoList.splice(idx,1);
    var str = JSON.stringify(todoList);
    localStorage.setItem("toLS",str);
  }
})