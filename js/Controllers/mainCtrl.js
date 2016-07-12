/**
 * Created by loganhendricks on 7/5/16.
 */

var app = angular.module('App');

app.controller('MainCtrl',  ['mainService', function ( mainService) {

    var vm = this;
    
    vm.view = '';
    vm.toDoLists = {};
    vm.theToDo = '';

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

    vm.changeView = function (viewName) {
        vm.view = mainService.updateView(viewName);
    };
    
    vm.deleteAllCompleted = function() {
        response = mainService.deleteCompleted();
        vm.toDoLists = response;
    }
    
}]);