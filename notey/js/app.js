angular.module('myApp',['ngRoute'])
.config(function($routeProvider){
  $routeProvider.when('/groceries',{
    templateUrl : "groceries.html",
    controller : "groceriesController"
  }).when('/contacts',{
    templateUrl : "contacts.html",
    controller : "contactsController"
  }).when('/todo',{
    templateUrl : "todo.html",
    controller : "todoController"
  }).when('/404/:error',{
    templateUrl: "404.html",
    controller : "404Controller"
  }).otherwise({
    redirectTo : "/groceries"
  })
}).service('todoService', function(){
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
}).service('contactsService', function(){
  var contacts = [
    {name:'Mike', email:'mike@fullsail.edu', phone:'407-877-8976'},
    {name:'Mike', email:'mike@fullsail.edu', phone:'407-877-8976'}
  ];
  this.getContact = function(){
    var str = localStorage.getItem("contactLS");
    contacts = JSON.parse(str) || contacts;
    return contacts;
  }
  this.newContact = function(pName,pEmail,pPhone){
    var contactObject = {name:pName,email:pEmail,phone:pPhone};
    contacts.push(contactObject);
    var str = JSON.stringify(contacts);
    localStorage.setItem("contactLS",str);
  }
  this.deleteContact = function(pName){
    var idx = contacts.indexOf(pName);
    contacts.splice(idx,1);
    var str = JSON.stringify(contacts);
    localStorage.setItem("contactLS",str);
  }
}).service('groceriesService', function(){
  var groceries = [
    {name:'Bread',price:'6.99',aisle:'4',sku:'987'},
    {name:'Milk',price:'6.99',aisle:'4',sku:'987'}
  ];
  this.getNames = function(){
    var str = localStorage.getItem("itemLS");
    groceries = JSON.parse(str) || groceries;
    return groceries
  }
  this.newItem = function(pName,pPrice,pAisle,pSku){
    var object = {name:pName,price:pPrice,aisle:pAisle,sku:pSku};
    groceries.push(object);
    var str = JSON.stringify(groceries);
    localStorage.setItem("itemLS",str);
  }
  this.deleteItem = function(pName){
    var idx = groceries.indexOf(pName);
    groceries.splice(idx,1);
    var str = JSON.stringify(groceries);
    localStorage.setItem("itemLS",str);
  }
}).controller('todoController', function($scope,todoService){
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
}).controller('contactsController', function($scope,contactsService){
    $scope.contactsName;
    $scope.contactsEmail;
    $scope.contactsPhone;
    $scope.contacts = contactsService.getContact();
    $scope.newContact = function(){
      if(
        $scope.contactsName  == null || $scope.contactsName  == ""   ||
        $scope.contactsEmail == null || $scope.contactsEmail == ""   ||
        $scope.contactsPhone   == null || $scope.contactsPhone   == ""   ){
        return console.log('fail to return value');
      }else{
        contactsService.newContact(
          $scope.contactsName,
          $scope.contactsEmail,
          $scope.contactsPhone
        );
        $scope.contactsName  = null;
        $scope.contactsEmail = null;
        $scope.contactsPhone = null;
      }
    }
    $scope.deleteContact = function(deletedItem){
      contactsService.deleteContact(deletedItem);
    }
}).controller('groceriesController', function($scope,groceriesService){
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
        $scope.grocerySku   == null || $scope.grocerySku   == ""   ){
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
  }).controller("404Controller", function ($scope, $routeParams){
      $scope.errorMessage = $routeParams.error

    });