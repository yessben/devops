/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $window, $internal, $responderEncuesta) {
        
        // Obtenemos el array Normal de preguntas
        $scope.encuesta = $internal.responderEncuesta;
        var socket = io.connect('https://ancient-journey-62555.herokuapp.com/');// SOcket.io
        

        var respuesta = new $responderEncuesta();

        $scope.save = function () {
            $rootScope.spin = true;
            
            respuesta.idEncuesta = $internal.responderEncuesta.idEncuesta;
            respuesta.preguntas = $internal.responderEncuesta.preguntas;
            respuesta.attuid = $internal.responderEncuesta.attuid;
            respuesta.nombre = $internal.responderEncuesta.nombre;
            
            respuesta.attuid = respuesta.attuid.toUpperCase();

            respuesta.$save().then(function (data) {
                $rootScope.spin = false;
                if(data.success){
                    if($internal.encuesta.tipoEncuesta.id === 3){
                        $internal.calificacion = data.data.calificacion;
                    }
                    socket.emit('event-responder-encuesta', { id: $internal.responderEncuesta.idEncuesta });
                    $window.location = '#/finalizar-encuesta/';
                }else{
                    $rootScope.alert = true;
                    $rootScope.mensajeAlerta = data.msjError;
                    
                    setTimeout(function(){
                        $window.location = '#/';
                    },50000);
                }
            }, function (e) {
                $rootScope.spin = false;
                console.log(e);
            });
        };


    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$internal', '$responderEncuesta'];

    angular
        .module('preguntas')
        .controller('EnviarEncuestaController', Controller);
})();