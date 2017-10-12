angular.module('myApp')
.service('todoService', function(){
  var todoList = ['Clean the car', 'Go running.'];
  this.getTodoList = function(){
    var str = localStorage.getItem("toLS");
    todo = JSON.parse(str) || todoList;
    return todoList;
  }
  this.newTodo = function(pAction){
    todoList.push(pAction);
    var str = JSON.stringify(todoList);
    localStorage.setItem("toLS",str);
  }
  this.deleteTask = function(pName){
    var idx = todoList.indexOf(pName);
    todoList.splice(idx,1);
    var str = JSON.stringify(todoList);
    localStorage.setItem("toLS",str);
  }
})