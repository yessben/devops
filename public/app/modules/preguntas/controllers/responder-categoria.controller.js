/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $routeParams, $window, $internal) {

        // Obtenemos el array Normal de preguntas

        $scope.encuestaId = $routeParams.id;
        $scope.encuesta = $internal.encuesta;
        if(!$internal.encuesta.id){
            $window.location = '#/responder-encuesta/' + $scope.encuestaId;
        }else{
            $scope.pregunta = $internal.responderEncuesta.preguntas[0];
            $scope.animationLeft = false;
            $scope.total = $internal.responderEncuesta.preguntas.length;
            $scope.index = $internal.index;
        }
        
         $scope.siguiente = function(respuesta){

            setTimeout(function(){
                $internal.responderEncuesta.preguntas[$internal.index].respuesta = respuesta;
                $internal.index++;
               if($internal.index === $internal.responderEncuesta.preguntas.length){
                    $window.location ='#/enviar-encuesta/';
                } else{
                    $scope.pregunta = $internal.responderEncuesta.preguntas[$internal.index];
                }
                
                $scope.animationLeft = true;
                $scope.$apply();
                setTimeout(function(){
                    $scope.animationLeft = false;
                    $scope.index = $internal.index;
                    $scope.$apply();
                },300);

            },200);
        };

        $scope.backAction = function(){
            if($internal.index===0){
                $window.history.back();
            }else{
                console.log($internal.index);
                $internal.index--;
                $scope.pregunta = $internal.responderEncuesta.preguntas[$internal.index];
            }
        };


    };

    Controller.$inject = ['$scope', '$rootScope', '$routeParams', '$window', '$internal'];

    angular
        .module('preguntas')
        .controller('ResponderCategoriaController', Controller);
})();