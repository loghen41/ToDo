

(function () {
    var app = angular.module('App');

    app.component('toDo', {
        bindings: {
            list: '=',
            info: '='
        },
        templateUrl: '../js/Directives/toDo/toDo.html',
        controllerAs: toDoController
    });


    function toDoController( mainService) {
        var vm = this;

        vm.markCompleted = function (item) {
            mainService.markComplete(item);

        };

        vm.delete = function (list, toDo) {
            console.log(list);
            console.log(toDo);

            mainService.deleteToDo(list, toDo);

        };
    }
})();

