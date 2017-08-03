/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $window, $internal, $encuestas, $routeParams) {
        
        $scope.encuestaId = $routeParams.id;
        //$scope.encuesta = $internal.encuesta;

         $scope.ingresar = function () {

            if ($scope.encuestaId !== "") {
                $rootScope.spin = true;
                $scope.encuesta = $encuestas.get({
                    id_encuesta: $scope.encuestaId
                }, function (data) {
                    $rootScope.spin = false;
                    $scope.encuesta = data;
                    console.log($internal.encuesta);
                    if (data.id !== undefined) {
                        $scope.init();
                    } else {
                        $window.location = '#/inicio-alert/' + $scope.encuestaId;
                    }
                }, function (e) {
                    $rootScope.spin = false;
                    console.log(e);
                });
            } else {

            }
        };
        
        $scope.init = function(){
            for(var i in $scope.encuesta.preguntas){
                var pregunta = $scope.encuesta.preguntas[i];
                    for(var j in pregunta.respuestas){
                        var respuesta = pregunta.respuestas[j];
                        respuesta.selected = false;
                    }

         }
        };

        $scope.contestar = function () {


            $internal.responderEncuesta = {
                idEncuesta: $routeParams.id,
                preguntas: $scope.encuesta.preguntas
            };
            $internal.responderEncuesta.respuesta = {};
            $internal.index = 0;
            if ($scope.encuesta.tipoEncuesta.id == 1) {

                $window.location = '#/responder-satisfaccion/';
            } else {
                $window.location = '#/responder-categoria/';
            }
        };

        $scope.ingresar();
    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$internal', '$encuestas', '$routeParams'];

    angular
        .module('responderEncuesta')
        .controller('ResponderEncuestaController', Controller);
})();