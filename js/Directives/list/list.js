/**
 * Created by loganhendricks on 7/6/16.
 */
(function () {

    var app = angular.module('App');

    app.component('list', {
            bindings: {
                list: '=',
                toDo: '='
            },
            templateUrl: '../js/Directives/list/list.html',
            controller: listController,
            controllerAs: 'ctrl'
        });

        function listController(mainService) {
            
            var vm = this;
            vm.editing = false;

           
            vm.openEdit = function() {
                vm.editing = true;
            };

            vm.edit = function(list, newName) {
                response = mainService.editItem( list, newName);
                if(response.hasOwnProperty('message')) {
                    alert(response.message);
                }
                else {
                    vm.toDoLists = response;
                    vm.editing = false;
                    vm.newName = '';
                }
            };

            vm.delete = function (list) {
                vm.toDoLists =  mainService.deleteList(list);
                
            };


            vm.markCompleted = function (item) {
               vm.toDoLists =  mainService.markComplete(item);

            };
        }
})();