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
                    $scope.encuesta = data.data;
                    $internal.encuesta = data.data;
                    if (data.success) {
                        $scope.init();
                    } else {
                        // $window.location = '#/inicio-alert/' + $scope.encuestaId;

                        $internal.nombre = "Oh";                 
                        $internal.msj = data.msjError;
                        
                        
                        $window.location = '#/error/';
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


            if($scope.encuesta.tipoEncuesta.id === 3){

                preguntas = $scope.encuesta.preguntas;
                $scope.encuesta.preguntas = preguntas.sort(function() {return Math.random() - 0.5});

                for(var i in $scope.encuesta.preguntas){
                    var lista = $scope.encuesta.preguntas[i].respuestas;
                    $scope.encuesta.preguntas[i].respuestas = lista.sort(function() {return Math.random() - 0.5});
                }
            }


            $internal.responderEncuesta = {
                idEncuesta: $routeParams.id,
                preguntas: $scope.encuesta.preguntas,
                attuid: $scope.encuesta.attuid,
                nombre: $scope.encuesta.nombre
            };
            $internal.responderEncuesta.respuesta = {};
            $internal.index = 0;
            if ($scope.encuesta.tipoEncuesta.id == 1) {

                $window.location = '#/responder-satisfaccion/';
            } else {
                if($scope.encuesta.tipoEncuesta.id == 3){
                    
                    if($scope.encuesta.attuid  && $scope.encuesta.nombre){
                        if( $scope.encuesta.attuid.length === 6){
                            $window.location = '#/responder-categoria/';
                        }else{
                            $rootScope.alert = true;
                            $rootScope.mensajeAlerta = "EL ATTUID es incorrecto";
                        }
                    }else{
                        $rootScope.alert = true;
                        $rootScope.mensajeAlerta = "Debes llenar todos los campos.";
                    }
                }else{

                    $window.location = '#/responder-categoria/';
                }
            }
        };

        $scope.ingresar();
    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$internal', '$encuestas', '$routeParams'];

    angular
        .module('responderEncuesta')
        .controller('ResponderEncuestaController', Controller);
})();