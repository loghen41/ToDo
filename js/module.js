/**
 * Created by loganhendricks on 7/5/16.
 */
(function() {
var app = angular.module('App', ['ui.router', 'ngStorage']);

    app.config(function($stateProvider, $urlRouterProvider){

        $stateProvider
            .state('about', {
                url: '/about',
                template: "<about></about>"

            })
            .state('main', {
                url: '/main',
                template: "<main></main>"
            });

        $urlRouterProvider.otherwise('/about');
    });
})();



