(function(){
    angular.module('app', ['ui.carousel']).controller('Ctrl', function($scope) {


        $(document).ready(function(){
            $("header a").on('click', function(event) {
                if (this.hash !== "") {event.preventDefault();var hash = this.hash;$('html, body').animate({
                  scrollTop: $(hash).offset().top - 106
                }, 800, function(){
                    //window.location.hash = hash;
                });
              }
            });
          });
    
        this.startIndex = 1;
        this.slidesNumber = 3;
        this.baseUrl = 'http://localhost:4001/assets/img/';
        this.slides = [];
        for(var i = 0; i < this.slidesNumber; i++){
            this.slides.push( { image: 'url(http://localhost:4001/assets/img/'+i+'.jpg)'});
        };
      
      });
})();