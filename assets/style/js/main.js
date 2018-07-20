$(document).ready(function() {
  /**** NAVIGATION ****/
  // Close responsive navbar on nav-link click
  $(".nav-link").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Init Scrollspy
  $("body").scrollspy({
    target: "#navbar",
    offset: 75
  });

  // Navbar Scroll Transition - Shrink Navbar height when scrolling from top
  $(window).scroll(function() {
    if ($("#navbar").offset().top > 50) {
      $("#navbar").addClass("navbar-shrink");
    } else {
      $("#navbar").removeClass("navbar-shrink");
    }
  });

  // Init Owl Sliders
  // Members Slider
  $("#members-slider").owlCarousel({
    margin: 25,
    smartSpeed: 1000,
    nav: false,
    dots: true,
    dotsEach: true,
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 3
      },
      1000: {
        items: 5
      }
    }
  });

  // Blog Slider
  $("#blog-slider").owlCarousel({
    margin: 20,
    smartSpeed: 1000,
    nav: true,
    navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>'],
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    responsive: {
      0: {
        items: 1
      },
      500: {
        items: 2
      },
      600: {
        items: 3
      },
      1000: {
        items: 4
      }
    }
  });

  // Smoot Scroll
  // Select all links with hashes
  $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") == this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });
});
