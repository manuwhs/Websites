var scrollSpeed = 100; 		// Speed in milliseconds
var step = 8; 				// How many pixels to move per step
var current = 0;			// The current pixel row
var imageHeight = screen.height;		// Background image width

var bg_int_flag = 0;  // Flag to know if the background is scrolling 0 -> no
var bg_int = 0;		// SetInterval element (initialized to 0 to put some value and make it global variable)

var bg = document.getElementById("background");
// bg.onclick = function(event){ }


//The pixel row where to start a new loop
var restartPosition = imageHeight*100;

function scrollBg(){
	//Go to next pixel row.
	current += step;
	
	//If at the end of the image, then go to the top.
	if (current >= restartPosition){
		current = 0;
	}

	//Set the CSS of the header.
	$('#background').css("background-position","0px " +current+"px" );

}

//Calls the scrolling function repeatedly


//////////////////////////////////////////77
///   PILLS  ///
///////////////////////////

var pillholder = document.getElementById("pillholder");
pillholder.onclick= function(event){ 

	   if (bg_int_flag == 0){
			bg_int = setInterval("scrollBg()", scrollSpeed);
			bg_int_flag = 1;
			pillholder.style.backgroundImage = "url(./images/matrix/redpill.png)"
		}
		else{
			clearInterval(bg_int);
			bg_int_flag = 0;
			pillholder.style.backgroundImage = "url(./images/matrix/bluepill.png)"
		}
		
		
		if (obj_int_flag == 0){
		obj_int = setInterval("move_matrix()", time_ms);
			obj_int_flag = 1;
		}
		else{
			clearInterval(obj_int);
			obj_int_flag = 0;
		}


		if (sur_int_flag == 0){
			sur_int = setInterval("move_survival()", 100);	
			sur_int_flag = 1;
		}
		else{
			clearInterval(sur_int);
			sur_int_flag = 0;
		}

}





