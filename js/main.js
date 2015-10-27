// alert("keri's js file is working properly");

//when someone clicks on "submit" button
	//button moves down 1px to give effect of being pressed
	//shadow moves to inset (maybe) (through .clicked-button class)

// $('.submit').on('click', function () {
// 	$('.submit').addClass('clicked-button');
// });


// Smooth scroll this mother!

// Do it when someone clicks a nav link
$('nav a').on('click', function(e) {
  // prevent the standard link operation on click
  e.preventDefault();
  // use the href of the link to identify what
  // section to scroll to
  var thisTarget = $(this).attr('href');
  // get that section's top offset
  var targetOffset = $(thisTarget).offset().top;
  // use jQuery.animate() to animate the body's
  // scrollTop to the targetOffest
  $('body').animate({
    scrollTop: targetOffset - 95
  }, 900);
});

