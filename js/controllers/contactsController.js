angular.module('myApp')
.controller('contactsController', function($scope,contactsService){
    $scope.contactsName;
    $scope.contactsEmail;
    $scope.contactsPhone;
    $scope.contacts = contactsService.getContact();
    $scope.newContact = function(){
      // --------------------------------------------------------------
      // - If Null don't save, else save to local
      // --------------------------------------------------------------
      if(
        $scope.contactsName  == null || $scope.contactsName  == ""   ||
        $scope.contactsEmail == null || $scope.contactsEmail == ""   ||
        $scope.contactsPhone == null || $scope.contactsPhone == ""
      ){
        return console.log('fail to return value');
      }else{
        contactsService.newContact(
          $scope.contactsName,
          $scope.contactsEmail,
          $scope.contactsPhone
        );
      // --------------------------------------------------------------
      // - Reset values after saving
      // --------------------------------------------------------------
        $scope.contactsName  = null;
        $scope.contactsEmail = null;
        $scope.contactsPhone = null;
      }
    }
    // --------------------------------------------------------------
    // - Deletes Listing
    // --------------------------------------------------------------
    $scope.deleteContact = function(deletedItem){
      contactsService.deleteContact(deletedItem);
    }
})