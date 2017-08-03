/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $window, $routeParams) {
        $scope.id = $routeParams.id;
        $scope.regresar = function(){
            $window.location = '#/';
        };
    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$routeParams'];

    angular
        .module('inicio')
        .controller('InicioAlertController', Controller);
})();