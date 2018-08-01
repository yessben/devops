/*global angular*/
(function () {

    var controller = function ($scope, $rootScope) {

            Particles.init({
              selector: '.background',
              color: '#000000',
              maxParticles: 80,
              connectParticles: true,
              responsive: [
                {
                  breakpoint: 768,
                  options: {
                    maxParticles: 80
                  }
                }, {
                  breakpoint: 375,
                  options: {
                    maxParticles: 50
                  }
                }
              ]
            });
            
    };
    controller.$inject = ['$scope','$rootScope'];
    angular.module('app').controller('HomeController', controller);

})();