$(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      loop: true,
      dots:false,
      autoplay: true,
      autoplayTimeout: 2000,
      smartSpeed: 1000,
      margin: 40,
      animateOut: "slideOutUp",
      animateIn: "slideInUp"
    });
  });