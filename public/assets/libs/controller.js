(function(){
    angular.module('app', ['ui.carousel']).controller('Ctrl', function($scope) {


        $(document).ready(function(){
            $("header a").on('click', function(event) {
                if (this.hash !== "") {event.preventDefault();var hash = this.hash;$('html, body').animate({
                  scrollTop: $(hash).offset().top - 80
                }, 800, function(){
                    //window.location.hash = hash;
                });
              }
            });
          });
          
    
        this.startIndex = 1;
        this.slidesNumber = 3;
        this.baseUrl = document.location.origin + '/assets/img/';
        this.slides = [];
        for(var i = 0; i < this.slidesNumber; i++){
            this.slides.push( { image: 'url(http://localhost:4001/assets/img/'+i+'.jpg)'});
        };
      
        $scope.categorias = [
            {key: 'todo',         name: 'Todo', active: true},
            {key: 'rostro',         name: 'Rostro', active: false},
            {key: 'cuerpo',         name: 'Cuespo', active: false},
            {key: 'piel',           name: 'Piel', active: false },
            {key: 'procedimientos', name: 'Procedimientos', active: false }
        ];

        $scope.changeFilter = function(list, obj){
            for(var i in list){
                list[i].active = false;
            }
            obj.active = true;
        };
        $scope.menuShow = false;
        $scope.showMenu = function(){
            $scope.menuShow = true
        };
        $scope.hideMenu = function(){
            $scope.menuShow = false;
          };

          $('h1').parallaxContent({
            shift: -15,
            duration: 1
          });
          $('#contentInfo').parallaxContent({
            shift: -15,duration: 2
          });

      });
})();