angular.module('myApp')
.service('groceriesService', function(){
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
})