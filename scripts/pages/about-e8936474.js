import slick from 'slick-carousel'

// About slideshow

$(document).ready(function(){
  $('.js-about-header-slideshow').slick({
    infinite: true,
    arrows: false,
    autoplay: true,
    dots: true,
    autoplaySpeed: 4000
  });
});