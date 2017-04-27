'use strict';

angular.module('login', []).component('login', {
    templateUrl: './app/login/login.template.html',
    controller:['$scope', '$rootScope', '$location', '$http', 'AuthenticationService', function LoginController($scope, $rootScope, $location, $http, AuthenticationService) {
        var self = this;
        // reset login status
        AuthenticationService.ClearCredentials();


        self.login = function () {
            $scope.dataLoading = true;
            AuthenticationService.Login(self.username, self.password, function(response) {
                if(response.success) {
                    AuthenticationService.SetCredentials(self.username, self.password);
                    $location.path('#!/');
                    console.log("success");
                } else {
                    $scope.error = response.message;
                    $scope.dataLoading = false;

                }

            });
        };

        self.register = function () {
            $http({
                url : 'http://localhost:3000/saveUser',
                method : 'POST',
                data:{'username':self.register.email,
                    'password':self.register.password}
            }).success(function(data) {
                // AuthenticationService.SetCredentials(self.register.email, self.register.password);
                $location.path('#!/');
            });
        }


    }]
}).directive('validPasswordC', [function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            ctrl.$parsers.unshift(function (viewValue, $scope) {
                var noMatch = viewValue != scope.registerForm.password.$viewValue;
                ctrl.$setValidity('validPasswordC', !noMatch);
                return viewValue;
            })
        }

    }
}])
    .directive('emailUnique', ['$http', function ($http) {
        return {
            restrict: 'A',
            require: 'ngModel',
            link: function (scope, el, attrs, ctrl) {

                ctrl.$parsers.push(function (viewValue) {
                    if (!viewValue) {
                        ctrl.$setValidity('emailUnique', true);
                        return undefined;
                    }
                    $http.get('http://localhost:3000/availableEmail/'+ viewValue).success(function (data) {
                        if (data.length == 0)
                            ctrl.$setValidity('emailUnique', true);
                        else
                            ctrl.$setValidity('emailUnique', false);
                    }).error(function () {
                        alert('Sorry, a technical issue prevents to validate your email.\n ' +
                            'Thanks to retry later.');
                    });
                    return viewValue;
                });
            }
        };
    }]);

