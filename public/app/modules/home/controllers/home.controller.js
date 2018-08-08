/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $document, $window) {

            Particles.init({
              selector: '.background',
              color: '#000000',
              maxParticles: 80,
              connectParticles: true
              // responsive: [
              //   {
              //     breakpoint: 768,
              //     options: {
              //       maxParticles: 80
              //     }
              //   }, {
              //     breakpoint: 375,
              //     options: {
              //       maxParticles: 50
              //     }
              //   }
              // ]
            });

          $scope.pixelsScrolled = 0;
          $scope.scrollDown = false;

          $document.on('scroll', function() {
              $scope.$apply(function() {
                $scope.pixelsScrolled < $window.scrollY ?  $scope.scrollToDown() : $scope.scrollToUp();
                $scope.pixelsScrolled = $window.scrollY;
              })
          });
          $scope.scrollToUp = function(){
            $scope.scrollDown = false;
          };
          $scope.scrollToDown = function(){
            $scope.scrollDown = true;
          };
            
    };
    controller.$inject = ['$scope','$rootScope', '$document', '$window'];
    angular.module('app').controller('HomeController', controller);

})();