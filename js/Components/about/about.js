(function() {
    
    var app = angular.module('App');
    
        app.component('about', {
            templateUrl: '../js/Components/about/about.html',
            controller: aboutController,
            controllerAs: 'about'
        });
    
    function aboutController() {
        
    }

})();

