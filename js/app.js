$(function(){
    $('h1').hide().fadeIn(2000);

    $('.multiple-items').slick({
        variableWidth: true,
        infinite: true,
        prevArrow: '<button class="slide-arrow prev-arrow"></button>',
        nextArrow: '<button class="slide-arrow next-arrow"></button>',
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
          {
            breakpoint: 1023,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },{           
            breakpoint: 749,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    });

    function position(section){
      return $(section).offset().top;
    }

    function pageScroll(nav, section){
      $(nav).click(function(){
        $("html,body").animate({
          scrollTop : position(section)
        });
      });
    }

    pageScroll('#home', '.hero');
    pageScroll('#profile', '.section-profile');
    pageScroll('#works', '.section-works');
    pageScroll('#contact', '.section-contact');
});