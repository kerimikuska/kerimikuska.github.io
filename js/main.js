// alert("keri's js file is working properly");

//when someone hovers over "submit" button
	//color changes to a darker shade
	//shadow is added (both through .hover-button class)

$('.submit').on('hover', function () {
	$(this).addClass('hover-button');
});




//when someone clicks on "submit" button
	//button moves down 1px to give effect of being pressed
	//shadow moves to inset (maybe) (through .clicked-button class)

	//and a small "thank you for submitting" message shows up in place of the form
	//page does not reload


