'use strict';

// Define the route provider
angular.module('BookPlanner').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/', {
            template: '<dashboard></dashboard>'
        }).when('/login', {
            template: '<login></login>'
        }).when('/books', {
            template: '<my-books></my-books>'
        }).when('/books:id', {
            template: '<book-title></book-title>'
        }).when('/password-reset', {
            template: '<password-reset></password-reset>'
        }).otherwise('/');
    }
]);


