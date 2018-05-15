/* global angular*/
(function () {

    var Controller = function ($scope, $window, $internal) {

        $scope.calificacion = $internal.calificacion;
        $scope.tipo = $internal.encuesta.tipoEncuesta.id;
        $scope.nombre = $internal.encuesta.nombre;
        

    	$scope.terminar = function(){
    		$window.location = "#/";
    	};

    };

    Controller.$inject = ['$scope', '$window', '$internal'];

    angular
        .module('preguntas')
        .controller('FinalizarEncuestaController', Controller);
})();