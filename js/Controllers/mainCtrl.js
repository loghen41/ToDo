/**
 * Created by loganhendricks on 7/5/16.
 */

var app = angular.module('App');

app.controller('MainCtrl',  ['mainService', function ( mainService) {

    var vm = this;
    
    vm.view = 'main';
    vm.toDoLists = {};
    vm.theToDo = '';
    vm.deleting = false;
    
    function getLists() {
        vm.toDoLists = mainService.getLists();
    }

    getLists();
    
    vm.makeToDoList = function (list) {

        var response = mainService.addList(list);

        if(response.hasOwnProperty('message'))
        {
            alert(response.message);
        }
        else {
            vm.toDoLists = response;
            vm.theList = '';
        }

    };
    vm.changeView = function (viewName) {
        vm.view = mainService.updateView(viewName);
    };

    vm.addToDo = function (listName, toDoToAdd) {
        
      var response = mainService.addToDos(listName, toDoToAdd);

        if(response.hasOwnProperty('message'))
        {
            alert(response.message);
        }
        else {
            vm.toDoLists = response;
            vm.theToDo = '';
        }
    };

  
    
    vm.deleteAllCompleted = function() {
        vm.deleting = true;
        response = mainService.deleteCompleted();
        vm.toDoLists = response;
        vm.deleting = false;
    }
    
}]);