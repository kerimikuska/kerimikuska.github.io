// alert("keri's js file is working properly");

//when someone hovers over "submit" button
	//color changes to a darker shade
	//shadow is added (both through .hover-button class)

// $('.submit').on('hover', function () {
// 	$('.submit').addClass('hover-button');
// });




//when someone clicks on "submit" button
	//button moves down 1px to give effect of being pressed
	//shadow moves to inset (maybe) (through .clicked-button class)

// $('.submit').on('click', function () {
// 	$('.submit').addClass('clicked-button');
// });


	//and a small "thank you for submitting" message shows up in place of the form
	//page does not reload



//when someone clicks on any of the three Nav links (about, photos, contact).
	//((FYI, this is currently setup w/ deprecated "name" anchors))
	//jumps to respective id on page (#about, #photos, #contact)
	//makes sure the entire section is visible (note: 80px hidden under header)


//as a user scrolls down the page
	//maybe some transition elements? not sure yet. 


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
    scrollTop: targetOffset
  }, 900);
});

