





$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveRefreshRate:200,
        transitionStyle:true
     

    });
     $("#owl-demo2").owlCarousel({
        items: 2,
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsiveRefreshRate:200,
        transitionStyle:true,
        scrollPerPage:true
     
       
     

    });
   
});

