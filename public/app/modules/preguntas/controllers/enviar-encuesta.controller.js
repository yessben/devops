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
            
            respuesta.$save().then(function (data) {
                socket.emit('event-responder-encuesta', { id: $internal.responderEncuesta.idEncuesta });
                $rootScope.spin = false;
                $window.location = '#/finalizar-encuesta/';
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