// Mobile nav

$('.js-toggle-nav').click(function() {
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


// Fixed nav

$(function() {
  var nav = $(".js-nav");

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 0) {
      nav.addClass("is-fixed");
    }
    if (scroll <= 0) {
      nav.removeClass("is-fixed");
    }
  });
});