/*global angular*/
(function () {

    var controller = function ($scope, $rootScope, $document, $window) {


      if($window.outerWidth > 1000){
            Particles.init({
              selector: '.background',
              color: '#000000',
              maxParticles: 80,
              connectParticles: true
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

        }
            
    };
    controller.$inject = ['$scope','$rootScope', '$document', '$window'];
    angular.module('app').controller('HomeController', controller);

})();