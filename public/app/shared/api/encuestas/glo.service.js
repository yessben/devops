/* global angular */

(function () {
    angular
        .module('api.encuestas')
        .service('$glo',
            function ($resource) {
                var url = 'https://arcane-garden-60088.herokuapp.com/v0/responder_examen/:id_encuesta';
                return $resource(url, {
                    id_encuesta: '@id_encuesta'
                });
            });
})();