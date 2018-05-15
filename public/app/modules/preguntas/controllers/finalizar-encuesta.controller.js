/* global angular*/
(function () {

    var Controller = function ($scope, $window) {

        $scope.calificacion = $internal.calificacion;
        $scope.tipo = $internal.encuesta.tipoEncuesta.id;
        

    	$scope.terminar = function(){
    		$window.location = "#/";
    	};

    };

    Controller.$inject = ['$scope', '$window'];

    angular
        .module('preguntas')
        .controller('FinalizarEncuestaController', Controller);
})();