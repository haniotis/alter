// About slideshow

$('.js-about-header-slideshow').each(function() {
  $('.js-about-header-slide').first().addClass('is-active');
  setInterval(function() {
    var $currentSlide = $(this).find('.is-active').removeClass('is-active');
    var $next = $currentSlide.next().length ? $currentSlide.next() : $(this).children().eq(0);
    $next.addClass('is-active');
  }.bind(this), 2500);
});
