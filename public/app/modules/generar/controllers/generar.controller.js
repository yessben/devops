/* global angular*/
(function () {

    var Controller = function ($scope, $window, $internal, $encuestas) {
        var encuesta = new $encuestas();

        $scope.aceptar = function () {
            encuesta.titulo = $internal.encuesta.titulo;
            encuesta.descripcion = $internal.encuesta.descripcion;
            encuesta.autor = $internal.encuesta.autor;
            encuesta.direccion = $internal.encuesta.direccion;
            encuesta.valides = $internal.encuesta.valides;
            encuesta.tiempo = $internal.encuesta.tiempo;
            encuesta.tipoEncuesta = $internal.encuesta.tipoEncuesta;
            encuesta.preguntas = $internal.preguntas;
            encuesta
                .$save()
                .then(function (data) {
                    console.log(data);
                }, function (e) {
                    console.log(e);
                });
        };
    };

    Controller.$inject = ['$scope', '$window', '$internal', '$encuestas'];

    angular
        .module('generar')
        .controller('GenerarCodigoController', Controller);
})();