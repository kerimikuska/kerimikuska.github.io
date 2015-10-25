// var navOffset = $('.main-nav').offset().top;


//get the distance from the menu to the top of the page
//use "offset" and store it as a variable
//when you scroll down the nav starts at the top
//when you scroll up, the nav goes back to its place

// $(window).on('scroll', function () {
// 	var scrollPos = $(this).scrollTop();
	
// 	if (scrollPos >= navOffset) {
// 		$('.main-nav').addClass('scrolled');
// 	} else {
// 		$('.main-nav').removeClass('scrolled');
// 	}
// });

// $('header').css('background-color', 'blue');


// ========== CANVAS BELOW ========== //

// function draw(){
// 	var canvas = document.getElementById('tutorial');
// 	if (canvas.getContext){
// 		var ctx = canvas.getContext('2d');
//     }
// }

function draw() {
      var canvas = document.getElementById("canvas");
      if (canvas.getContext) {
        var ctx = canvas.getContext("2d");
	
	    ctx.beginPath();
	    ctx.arc(75,75,50,0,Math.PI*2,true); // Outer circle
	    ctx.moveTo(110,75);
	    ctx.arc(75,75,35,0,Math.PI,false);  // Mouth (clockwise)
	    ctx.moveTo(65,65);
	    ctx.arc(60,65,5,0,Math.PI*2,true);  // Left eye
	    ctx.moveTo(95,65);
	    ctx.arc(90,65,5,0,Math.PI*2,true);  // Right eye
	    ctx.stroke();
	  }
    }

// $('body').onloaddraw();

$('.body').on('load', function () {
	draw();
});

// ========== CANVAS ABOVE ========== //
