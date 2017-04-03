$( document ).ready(function() {
   console.log( "ready!" );
//hover//
$( ".a" ).hover(function () {
   $( ".a" ).toggleClass("on_hover");
});

$( ".image" ).hover(function () {
   $( ".image" ).toggleClass("on_hover");
});

//slow scroll//
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1500);
        return false;
      }
    }
  });
});

//Article clicks//

$("#africa").click(function() {
    window.open('http://africasacountry.com/2017/03/the-border-crossing/','_blank');
  });



$(window).scroll(function() {
    if ($(this).scrollTop() >= 175) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(250);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(250);   // Else fade out the arrow
    }
});

$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 1500);
  });
});
