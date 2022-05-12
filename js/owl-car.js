$(function() {
    var owl = $(".owl-carousel");
    owl.owlCarousel({
    items: 3,
    margin: 10,
    loop: true,
    dots:true,
    dotsEach:true,
    responsive:{ 
                 0:{
                     items:1
                 },
                 800:{
                     items:3
                 },
                 1000:{
                     items:3
                 }
             }
    });
    });