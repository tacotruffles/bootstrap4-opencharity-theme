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
});
