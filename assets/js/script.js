 

/*============================= Back To Top Button Script ========================*/
var mybutton = document.getElementById("backTop");
window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
    mybutton.style.display = "flex";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


(function ($) {
 

  // $('body').css('padding-top', $('.navbar').outerHeight() + 'px')
  // detect scroll top or down
  if ($('.smart-scroll').length > 0) { // check if element exists
    var last_scroll_top = 0;
    $(window).on('scroll', function() {
        scroll_top = $(this).scrollTop();
        // console.log(scroll_top);
        if (scroll_top < last_scroll_top) {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-up');
        } else {
            $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-up');
        }
        if (scroll_top === 0) {
          $('.smart-scroll').removeClass('scrolled-up').removeClass('scrolled-up');
        }
        last_scroll_top = scroll_top;
    });
  }



  // Main Header Nav links Active Class Genaretor
  $("#mainNav .navbar-nav li a").filter(function () {
    return this.href == location.href.replace(/#.*/, "");
  }).parents("li").addClass("active");

  // remove active class from resmenu
  if(window.innerWidth < 991 ) {
    $(".navbar-nav .nav-link").click(function() {
      $("#navbarSupportedContent").removeClass("show");
      $(".navbar-toggle").addClass("collapsed");
    })
  }
 

  // Bottom Section Awesome  Slider Activaton Script (Homepage)
  $(".awesomeSlider").owlCarousel({
    autoplay: true, 
    autoplayHoverPause: true,
    smartSpeed: 550,
    responsiveClass: true,
    autoplayTimeout: 10000,
    autoplaySpeed: 3000,
    loop: true,
    margin: 40,
    items: 3.75,
    nav: false,
    dots: true, 
    responsiveClass: true, 
    responsive: { 
        0: { items: 2, margin: 20 },
        576: { items: 2, margin: 20  },
        768: { items: 3, margin: 30 },
        992: { items: 3.75, margin: 30 }, 
        1200: { items: 3.75, center: true, margin: 30 },  
        1400: { items: 4.75, center: true, margin: 40 },  
    } 
  });

  AOS.init({
    duration: 800,
    once: true
  });
 
 
 
 
})(jQuery);
 

 