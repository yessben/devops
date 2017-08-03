/* global angular*/
(function () {
    angular.module('app', [
        'ngRoute',
        'ngResource',
        'dir.spin',
        'dir.alert',
        'dir.header',
        'api.encuestas',
        'api.encuestas.direcciones',
        'api.encuestas.tipo',
        'api.encuestas.satisfaccion',
        'api.encuestas.responder',
        'internal',
        'responderEncuesta',
        'inicio',
        'categorias',
        'preguntas',
        'generar',
        'detalle',
        'mPlaceholder',
        'mRadioGroup']);
})();