angular.module('myApp')
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
    redirectTo : ""
  })
})