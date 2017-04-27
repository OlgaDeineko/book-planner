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
        }).when('/register', {
            templateUrl: './app/login/register.template.html'
        }).when('/password-reset', {
            template: '<password-reset></password-reset>'
        }).otherwise('/');
    }
]);
    // .run(['$rootScope', '$location', '$localStorage', '$http',  '$route',
    // function ($rootScope, $location, $localStorage, $http,  $route) {
    //
    //     if ($localStorage.currentUser) {
    //         $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
    //     }
    //
    //     // redirect to login page if not logged in and trying to access a restricted page
    //     $rootScope.$on('$locationChangeStart', function (event, next, current) {
    //         var publicPages = ['/login'];
    //         var restrictedPage = publicPages.indexOf($location.path()) === -1;
    //         if (restrictedPage && !$localStorage.currentUser) {
    //             $location.path('/login');
    //         }
    //     });
    //
    // }]);



