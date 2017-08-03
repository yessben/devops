/* global angular */

(function () {
    var Directive = function () {
        var Link = function ($scope, $element, attr, ngModelControler) {
            $scope.$label = angular.element($element.children('label')[0]);
            $scope.$input = angular.element($element.children('input')[1]);
            $scope.$clear = angular.element($element.children('i')[2]);
            
            $scope.$clear.addClass('ng-hide');

            $scope.inputFocus = function () {
                $scope.$label.addClass('focused');
            };

            $scope.inputBlur = function () {
                $scope.model = $element.children()[1].value;
                if ($scope.model === '' || $scope.model === undefined) {
                    $scope.$label.removeClass('focused');
                } else {
                    $scope.$label.addClass('focused');
                }
            };
            $scope.inputKeyup = function(){
                $scope.model = $element.children()[1].value;
                if($scope.model === '' || $scope.model === undefined){
                    $scope.$clear.addClass('ng-hide');
                }else{
                    $scope.$clear.removeClass('ng-hide');
                }
            };
            $scope.inputClear = function(){
                ngModelControler.$setViewValue('');
                ngModelControler.$render();
                $element.children()[1].value = '';
                $scope.$label.removeClass('focused');
                $scope.$clear.addClass('ng-hide');
            };

            
            $scope.$input.bind('focus',$scope.inputFocus);
            $scope.$input.bind('blur',$scope.inputBlur);
            $scope.$input.bind('keyup',$scope.inputKeyup);
            $scope.$clear.bind('click',$scope.inputClear);
        };
        return {
            restrict: 'A',
            require:'?ngModel',
            link: Link
        };
    };
    angular
        .module('mPlaceholder', [])
        .directive('ngPlaceholder', Directive);
})();