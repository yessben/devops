/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $glo, $internal, $window) {
        
        $scope.nombre = $internal.nombre;
        $scope.attuid = $internal.attuid;                        
        $scope.msj = $internal.msj;

    };

    Controller.$inject = ['$scope', '$rootScope','$glo', '$internal','$window'];

    angular
        .module('responderEncuesta')
        .controller('ErrorController', Controller);
})();