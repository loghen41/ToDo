/**
 * Created by loganhendricks on 7/6/16.
 */
(function () {
    var app = angular.module('App');

    app.component('toDo', {
            bindings: {
                list: '=',
                info: '='
            },
            templateUrl: '../js/Directives/toDo/toDo.html',
            controller: toDoController,
            controllerAs: 'toDo'
        });

        function toDoController(mainService) {

            var vm = this;
            vm.editing = false;
            vm.newName = '';

            vm.openEdit = function() {
                vm.editing = true;
            };

            vm.edit = function( toDo, newName) {
               response = mainService.editItem( toDo, newName);
                if(response.hasOwnProperty('message')) {
                    alert(response.message);
                }
                else {
                    vm.toDoLists = response;
                    vm.editing = false;
                    vm.newName = '';
                }
                
                
            };
            
            vm.markCompleted = function (item) {
               vm.toDoLists =  mainService.markComplete(item);

            };

            vm.delete = function (list, toDo) {

               vm.toDoLists = mainService.deleteToDo(list, toDo);

            };
        }
})();