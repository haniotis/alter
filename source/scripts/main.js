// Mobile nav

$('.js-toggle-nav').click(function() {
  $('.js-mobile-nav').toggleClass("is-open");
});


// Video

$('.js-trigger-video').click(function() {
  $('.js-video-modal').toggleClass("is-visible");
  $('.js-page').toggleClass("is-clipped");
});

$('.js-open-video').click(function() {
  $('.js-video')[0].src += "?autoplay=1";
});

$('.js-close-video').click(function() {
  $('.js-video')[0].src += "?autoplay=0";
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