/* global angular*/
(function () {

    var Controller = function ($scope, $window) {

    	$scope.terminar = function(){
    		$window.location = "#/";
    	};

    };

    Controller.$inject = ['$scope', '$window'];

    angular
        .module('preguntas')
        .controller('FinalizarEncuestaController', Controller);
})();