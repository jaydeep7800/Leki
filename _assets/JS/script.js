$(".product-slider").slick({
  infinite: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 991,
      settings: {
        dots: true,
        slidesToShow: 2.3,
        slidesToScroll: 2,
      },
    },
  ],
});



$(document).ready(function checkPosition() {
    if (window.matchMedia('(max-width: 991px)').matches) {
      $(".all-season-btn").click(function(){
        $(".all-season-menu").toggle();
      });
      $(".winter-season-btn").click(function(){
        $(".winter-menu").toggle();
      });
      $(".services-season-btn").click(function(){
        $(".services-menu").toggle();
      });
    }
});


$('div.dropdown-menu').on('click', function(event){
  // The event won't be propagated up to the document NODE and 
  // therefore delegated events won't be fired
  event.stopPropagation();
});