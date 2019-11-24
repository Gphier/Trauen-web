(function ($) {
  $(function () {
    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    /* Scroll */
    $('.menu li a').click(function(e){
      e.preventDefault();
      let ancla = $(this).attr('href');
      var position = $(ancla).position();
      $('html, body').animate({scrollTop: (position.top - 60)}, 1000);
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space