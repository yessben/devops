/* global angular*/
(function () {

    var Controller = function ($scope, $window, $internal) {

        $scope.calificacion = $internal.calificacion;
        $scope.tipo = $internal.encuesta && $internal.encuesta.tipoEncuesta ? $internal.encuesta.tipoEncuesta.id : 0;
        $scope.id = $internal.encuesta.id;        
        $scope.nombre = $internal.responderEncuesta ? $internal.responderEncuesta.nombre : "";
        

    	$scope.terminar = function(){
            // $window.location = "#/";
            $window.location = '#/responder-encuesta/' + $scope.id;
    	};

    };

    Controller.$inject = ['$scope', '$window', '$internal'];

    angular
        .module('preguntas')
        .controller('FinalizarEncuestaController', Controller);
})();