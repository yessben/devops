/* global angular */

(function () {
    var service = function ($satisfaccion) {
        return {
            categorias: [
                {
                    id: 1,
                    name: '',
                    img: ''
                }
            ],
            encuesta: {},
            preguntas: [
                {
                    pregunta: '',
                    respuestas: []
                }
            ],
            respuestasSatisfaccion: $satisfaccion
                .query(
                    function () {},
                    function (e) {
                        console.log(e);
                    })
        };
    };
    angular
        .module('internal', [])
        .service('$internal', service);
})();