/*global angular*/
(function () {

    var router = function ($routeProvider) {
        var baseUrl = 'app/modules/';
        // Home
        $routeProvider.when('/home', {
            templateUrl: baseUrl + 'home/views/home.view.html',
            controller: 'HomeController'
        });
        // $routeProvider.otherwise({redirectTo : '/'});
    };

    router.$inject = ['$routeProvider'];
    angular.module('app').config(router);

})();