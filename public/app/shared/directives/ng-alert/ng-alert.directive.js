/* global angular */

(function () {
    var Directive = function () {
        var Link = function ($scope) {
            $scope.aceptar = function(){
                $scope.accion();
            };
        };
        return {
            restrict: 'E',
            templateUrl: 'app/shared/directives/ng-alert/ng-alert.template.html',
            link: Link,
            scope: {
                mensaje: '=',
                accion: '='
            }
        };
    };
    angular
        .module('dir.alert', [])
        .directive('ngAlert', Directive);
})();