'use strict';

angular.module('myBooks', []).component('myBooks', {
    templateUrl: './app/my-books/my-books.template.html',
    controller: ['book','$uibModal', function MyBooksController(book,$uibModal) {
    var self = this;
        book.getBooks().then(function(response) {
            self.books = response.data;
        });

        self.open = function() {
            $uibModal.open({
                component: "createModal",
                resolve: {
                    modalData: function() {
                        return self.books;
                    }
                }
            });
        };


    }]
}).component('createModal', {
    templateUrl: './app/my-books/create-modal.html',
    bindings: {
        modalInstance: "<",
        resolve: "<"
    },
    controller: [function() {
        var self = this;
        self.modalData = self.resolve.modalData;
        self.handleClose = function() {
            self.modalInstance.close(self.modalData);
        };

        self.addBook = function (domScope,newBook) {
            self.newBook.id = self.modalData.length + 1;
            self.modalData.push(self.newBook);
            self.newBook = null;
            self.modalInstance.close(self.modalData);

        };

    }]
});