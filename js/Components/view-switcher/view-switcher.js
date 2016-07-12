(function() {
    
    var app = angular.module('App');
    
        app.component('viewSwitcher', {
            templateUrl: '../js/Components/view-switcher/view-switcher.html',
            controller: viewSwitcherController,
            controllerAs: 'switch'
        });
    
    function viewSwitcherController() {
        
    }

})();

