// alert("keri's js file is working properly");


// Smooth scroll 

$('nav a').on('click', function(e) {
 
  e.preventDefault();
  
  var thisTarget = $(this).attr('href');
  
  var targetOffset = $(thisTarget).offset().top;
 
  $('body').animate({
 
    scrollTop: targetOffset - 95

  }, 900);

});

// konami code

var kkeys = [], konami = "38,38,40,40,37,39,37,39,66,65";

$(document).keydown(function(e) {

  kkeys.push( e.keyCode );

  if ( kkeys.toString().indexOf( konami ) >= 0 ) {

    $(document).unbind('keydown',arguments.callee);
    
    window.location = "http://kerimikuska.github.io/404.html";

    // do something awesome
    // $("body").addClass("konami");
  
  }

});