/* global angular*/
(function () {

    var Controller = function ($scope, $rootScope, $window, $internal) {

        // LOAD $internal categorias
        $scope.categorias = $internal.categorias;


        // MARK: - Función que valida que los campos de categoría no estén vacíos.
        function isValid() {
            for (var i = 0; i < $scope.categorias.length; i++) {
                if ($scope.categorias[i].name === '') {
                    return false;
                }
            }
            return true;
        }

        // MARK: - Función para agregar más categorías.
        $scope.agregarCategorias = function () {
            if ($scope.categorias.length < 10) {
                if (isValid()) {
                    $scope.categorias.push({
                        id: $internal.categorias.length + 1,
                        name: ''
                    });
                } else {
                    $rootScope.alert = true;
                    $rootScope.mensajeAlerta = "La categoría no puede estar vacía.";
                }
            } else {
                $rootScope.alert = true;
                $rootScope.mensajeAlerta = "No puedes agregar más de 10 categorías.";
            }
        };

        $scope.removerCategoria = function () {
            $scope.categorias.pop();
        };

        // MARK: - Función para redireccionar a crear preguntas
        $scope.agregarPreguntas = function () {
            $internal.categorias = $scope.categorias;
            if (isValid()) {
                $window.location = '#/pregunta-categoria';
            } else {
                $rootScope.alert = true;
                $rootScope.mensajeAlerta = "La categoría no puede estar vacía.";
            }

        };

    };

    Controller.$inject = ['$scope', '$rootScope', '$window', '$internal'];

    angular
        .module('categorias')
        .controller('CategoriasController', Controller);
})();