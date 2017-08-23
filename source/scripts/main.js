import smoothScroll from 'smooth-scroll'

// Mobile nav

$('.js-toggle-nav').click(function() {
  $('.js-mobile-nav').toggleClass("is-open");
});


// Video

$('.js-trigger-video').click(function() {
  $('.js-video-modal').toggleClass("is-visible");
  $('.js-page').toggleClass("is-clipped");
});


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


// Smooth scroll

var navHeight = $(".js-nav").outerHeight();

smoothScroll.init({
  selector: '[data-scroll]',
  speed: 350,
  offset: navHeight,
  easing: 'easeInOutCubic'
})