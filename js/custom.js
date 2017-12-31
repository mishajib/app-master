/*
 * BootstrapPlusPlus - App landing Page HTML Template v1.0.0-beta (https://bootstrapplusplus.com/templates/app)
 * Copyright 2017 Bootstrap++
 * Licensed under MIT (https://github.com/BootstrapPlusPlus/App/blob/v1.0.0-beta/LICENSE.md)
 */

$(window).on('scroll',function() {
  var scroll = $(window).scrollTop();
  if (scroll > 0) {
    $("#nav").addClass("nav-fix");
  }else{
    $("#nav").removeClass("nav-fix");
  }
});

// Select all links with hashes
$('a.nav-link')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });
