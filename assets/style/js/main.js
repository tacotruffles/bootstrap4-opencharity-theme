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
});
