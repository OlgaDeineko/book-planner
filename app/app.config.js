'use strict';

// Define the route provider
angular.module('BookPlanner').config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.when('/dashboard', {
            template: '<dashboard></dashboard>'
        }).when('/registration', {
            template: '<registration></registration>'
        }).when('/myBooks', {
            template: '<my-books></my-books>'
        }).when('/bookTitle', {
            template: '<book-title></book-title>'
        }).otherwise('/dashboard');otherwise('/myBooks');
    }
]);


