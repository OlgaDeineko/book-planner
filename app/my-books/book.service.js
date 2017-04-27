'use strict';

angular.
module('bookServise', [])
    .service('book', ['$http', function($http) {

        this.getBooks = function(){
            return $http.get('http://localhost:3000/books');
        }
    }]);
