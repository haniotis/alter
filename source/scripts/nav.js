// Fixed nav

$(function() {
  var nav = $(".js-transparent-nav");
  var navOffset = nav.offset();

  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= navOffset.top) {
      nav.removeClass("is-transparent");
    }
    if (scroll <= navOffset.top) {
      nav.addClass("is-transparent");
    }
  });
});