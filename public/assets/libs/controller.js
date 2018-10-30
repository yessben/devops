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
            var strName = 's'+(i+3)+'.jpg';
            this.slides.push( { image: 'url('+this.baseUrl+strName});
        };
      
        $scope.categorias = [
            {key: 'todo',         name: 'Todo', active: true},
            {key: 'rostro',         name: 'Rostro', active: false},
            {key: 'cuerpo',         name: 'Cuerpo', active: false},
            {key: 'piel',           name: 'Piel', active: false },
            {key: 'procedimientos', name: 'Procedimientos', active: false }
        ];

        $scope.top3 = [
            {
                categorias: ['todo','rostro'],
                title: 'Nariz',
                desc: 'Es quizás la más socorrida de las cirugías de embellecimiento, olvidándose muchas veces de su función. En nuestro Centro de Cirugía no la hemos olvidado, realizamos un diagnóstico y tratamiento integral con corrección tanto estética como funcional.',
                imgs: ['s1.jpg']
            },
            {
                categorias: ['todo','rostro'],
                title: 'Nariz',
                desc: 'Es quizás la más socorrida de las cirugías de embellecimiento, olvidándose muchas veces de su función. En nuestro Centro de Cirugía no la hemos olvidado, realizamos un diagnóstico y tratamiento integral con corrección tanto estética como funcional.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','cuerpo'],
                title: 'Nariz',
                desc: 'Es quizás la más socorrida de las cirugías de embellecimiento, olvidándose muchas veces de su función. En nuestro Centro de Cirugía no la hemos olvidado, realizamos un diagnóstico y tratamiento integral con corrección tanto estética como funcional.',
                imgs: ['s6.jpg']
            }
        ];
        $scope.servicios = [
            {
                categorias: ['todo','rostro'],
                title: 'Nariz',
                desc: 'Es quizás la más socorrida de las cirugías de embellecimiento, olvidándose muchas veces de su función. En nuestro Centro de Cirugía no la hemos olvidado, realizamos un diagnóstico y tratamiento integral con corrección tanto estética como funcional.',
                imgs: ['s1.jpg']
            },
            {
                categorias: ['todo','rostro'],
                title: 'Nariz',
                desc: 'Es quizás la más socorrida de las cirugías de embellecimiento, olvidándose muchas veces de su función. En nuestro Centro de Cirugía no la hemos olvidado, realizamos un diagnóstico y tratamiento integral con corrección tanto estética como funcional.',
                imgs: ['s2.jpg']
            },
            {
                categorias: ['todo','cuerpo'],
                title: 'Nariz',
                desc: 'Es quizás la más socorrida de las cirugías de embellecimiento, olvidándose muchas veces de su función. En nuestro Centro de Cirugía no la hemos olvidado, realizamos un diagnóstico y tratamiento integral con corrección tanto estética como funcional.',
                imgs: ['s3.jpg']
            },
            {
                categorias: ['todo','piel'],
                title: 'Nariz',
                desc: 'Es quizás la más socorrida de las cirugías de embellecimiento, olvidándose muchas veces de su función. En nuestro Centro de Cirugía no la hemos olvidado, realizamos un diagnóstico y tratamiento integral con corrección tanto estética como funcional.',
                imgs: ['s4.jpg']
            },
            {
                categorias: ['todo','procedimientos'],
                title: 'Nariz',
                desc: 'Es quizás la más socorrida de las cirugías de embellecimiento, olvidándose muchas veces de su función. En nuestro Centro de Cirugía no la hemos olvidado, realizamos un diagnóstico y tratamiento integral con corrección tanto estética como funcional.',
                imgs: ['s5.jpg']
            }
        ]

        $scope.search = {};
        $scope.changeFilter = function(list, obj){
            for(var i in list){
                list[i].active = false;
            }
            obj.active = true;
            $scope.search.categorias = obj.key;
        };
        $scope.menuShow = false;
        $scope.showMenu = function(){
            $scope.menuShow = true
        };
        $scope.hideMenu = function(){
            $scope.menuShow = false;
        };

        $scope.servicio = {};
        $scope.fullActive = false;
        $scope.full = function(obj){
            $scope.servicio = obj;
            $scope.fullActive = true;
        };
        $scope.min = function(){
            $scope.fullActive = false;
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