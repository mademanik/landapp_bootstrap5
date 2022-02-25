$(function () {
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
    autoplay: false,
    nav: false,
    controlsText: [
      '<i class= "fas fa-angle-left prev"></i>',
      '<i class= "fas fa-angle-right next"></i>',
    ],
  });
});
