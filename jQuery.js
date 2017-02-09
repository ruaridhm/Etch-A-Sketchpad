$(document).ready(function(){

//Initial grid size
	var $gridSize = 256
	console.log("")

// Grid Creation
	for(i=0; i<$gridSize; i++) {
		$('#container').append('<div>&nbsp</div>');
		$('div').addClass('boxClass');
	};
//Reset Button variable set
		
	$("#reset").click(function(){
	    console.log("reset clicked");
	    var $gridSize = prompt("Please enter a Grid Size");
	    console.log($gridSize);	  

//Clearing old grid
		$('#container').empty();

//Reset Button setting Grid
		for(i=0; i<$gridSize; i++) {
		$('#container').append('<div>&nbsp</div>');
		$('div').addClass('boxClass');
		};
	});

//Random colours

	var boxColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	jQuery(".font-style").animate({color: boxColor}, 2000); // animate


	var newColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	jQuery(".font-style").animate({color: newColor}, 2000); // animate


   
    var newColor2 = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
	jQuery(".font-style").animate({color: newColor2}, 2000); // animate

//Hover Functions

	$('.boxClass').mouseover(function(){
		$(this).css("background-color", newColor)
	});

	$('.boxClass').mouseleave(function(){
		$(this).css("background-color", newColor2)
	});

//Box initial random colour

	$('.boxClass').css("background-color", boxColor)
});