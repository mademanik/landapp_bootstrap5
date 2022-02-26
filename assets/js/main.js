$(function () {
  "use strict";
  $(window).on("scroll", function (event) {
    var scroll = $(window).scrollTop();
    if (scroll < 20) {
      $(".navbar-area").removeClass("sticky");
    } else {
      $(".navbar-area").addClass("sticky");
    }
  });

  $(document).ready(function () {
    $(".venobox").venobox();
  });

  // Wow JS
  new WOW().init();

  // Tiny Slider
  var slider = tns({
    container: ".testimonial-active",
    items: 1,
    slideBy: "page",
    mouseDrag:true,
    autoplay: false,
    nav: false,
    controlsText: [
      '<i class= "fas fa-angle-left prev"></i>',
      '<i class= "fas fa-angle-right next"></i>',
    ],
  });

  // Scrollit Js
  $.scrollIt();
});
