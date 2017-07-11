// Mobile nav

$('.js-toggle-nav').click(function() {
  $('.js-page').toggleClass("is-clipped");
  $('.js-mobile-nav').toggleClass("is-open");
});


// Smooth scroll

import smoothScroll from 'smooth-scroll'
var navHeight = $(".js-nav").outerHeight();

smoothScroll.init({
  selector: '[data-scroll]',
  speed: 400,
  easing: 'easeInOutCubic',
  offset: navHeight - 1
})