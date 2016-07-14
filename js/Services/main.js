(function () {
    var app = angular.module('App', []);

    app.service('mainService', function () {
            var view = '';
            var toDoLists = {};
            
           
            function windowCheck() {
                if (window.localStorage.getItem('storedList')) {
                    toDoLists = JSON.parse(window.localStorage.getItem('storedList'));
                }
            }

            windowCheck();

            this.getLists = function () {
                return toDoLists;
            };


            // List Functionality
            this.addList = function (list) {
                if (toDoLists[list] === undefined) {
                    toDoLists[list] = {
                        originalName: list,
                        name: list,
                        completed: false,
                        completedIcon: '../images/notComplete.png',
                        thingsToDo: {}
                    };
                    window.localStorage.setItem('storedList', JSON.stringify(toDoLists));
                    return toDoLists;
                }

                else {
                    data = {message: "Cannot Build Two Lists with the same name!"};
                    return data;
                }

            };

            this.deleteList = function (list) {
                delete toDoLists[list.originalName];
                window.localStorage.setItem('storedList', JSON.stringify(toDoLists));
                return toDoLists;
            };


            //To Do funcitonality
            this.addToDos = function (listName, toDoToAdd) {
                if (toDoLists[listName].thingsToDo[toDoToAdd] === undefined) {
                    toDoLists[listName].thingsToDo[toDoToAdd] = {
                        originalName: toDoToAdd,
                        toDo: toDoToAdd,
                        completed: false,
                        completedIcon: '../images/notComplete.png;'
                    };
                    window.localStorage.setItem('storedList', JSON.stringify(toDoLists));
                    return toDoLists;
                }
                else {
                    data = {message: "Cannot Have two To-Do's with the same name!"};
                    return data;
                }
            };

            this.deleteToDo = function (list, toDo) {
                delete toDoLists[list].thingsToDo[toDo.originalName];
                window.localStorage.setItem('storedList', JSON.stringify(toDoLists));
                return toDoLists;

            };

            this.editItem = function (item, newName) {
                if (item.hasOwnProperty('name')) {
                    item.name = newName;
                    window.localStorage.setItem('storedList', JSON.stringify(toDoLists));
                    return toDoLists;
                }
                else if (item.hasOwnProperty('toDo')) {
                    item.toDo = newName;
                    window.localStorage.setItem('storedList', JSON.stringify(toDoLists));
                    return toDoLists;
                }
                else {
                    data = {message: "Please enter a valid To-Do!"};
                    return data;
                }

            };

            this.markComplete = function (item) {
                if (!item.completed) {
                    item.completed = true;
                    item.completedIcon = '../images/complete.png';
                    window.localStorage.setItem('storedList', JSON.stringify(toDoLists));
                    return toDoLists;
                }
                else {
                    item.completed = false;
                    item.completedIcon = '../images/notComplete.png';
                    window.localStorage.setItem('storedList', JSON.stringify(toDoLists));
                    return toDoLists;
                }

            };

            this.deleteCompleted = function () {
                var listArray = [];
                for (var x in toDoLists) {
                    for (var y in toDoLists[x].thingsToDo) {
                        if (toDoLists[x].thingsToDo[y].completed === true) {
                            delete toDoLists[x].thingsToDo[y];
                        }
                    }
                    if (toDoLists[x].completed === true) {
                        delete toDoLists[x];
                    }
                }
                window.localStorage.setItem('storedList', JSON.stringify(toDoLists));
                return toDoLists;
            };

            this.updateView = function (newView) {
                view = newView;
                return view;
            };


            this.editList = function (list) {

            }
        }
    );
})();