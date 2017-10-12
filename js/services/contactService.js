angular.module('myApp')
.service('contactsService', function(){
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
})