
var sur_int_flag = 0;  // Flag to know if the sentinels are moving
var sur_int = 0;		// SetInterval element (initialized to 0 to put some value and make it global variable)

// When you use "var" the variable is accesible by other .js files
var time_ms2 = 100;

sin_value = 0;
vel_y = 0.25;

y_range = 10;
var dist_min = 20;


var playground = document.getElementById("survival_ani");

playground.style.backgroundImage = "url('./images/matrix/matrix-big2.jpg')";
playground.style.borderLeft = "10px";
var playgroundX = playground.offsetLeft
var playgroundY = playground.offsetTop
var playgroundW = playground.clientWidth
var playgroundH = playground.clientHeight

// playground.onclick = function(event){ }

// SURVIVAL IMAGE 

var survival_img = document.getElementById("survival_img");
survival_img.style.position = "absolute";	
survival_img.style.zIndex = "1000";
r = get_img_ratio(survival_img);
w_aux =  containerW * 0.07 ;
set_wh( survival_img, w_aux, w_aux/r );

y_offset = playgroundY + (playgroundH - w_aux/r)/2
set_xy( survival_img, playgroundX + (playgroundW - w_aux)/2, y_offset);

survival_img.onclick = function (event){
	window.location = "./pdfs/Survival_Madrix.pdf";

}
//animation loop

	
max_sentinels = 5;
var mix_w_sent = 50;
var max_w_sent = 90;

var min_siny = 2;
var max_siny = 5;

var time_k = 0.1;

var min_tao = 15;
var max_tao = 20;

var sentinels = new Array(max_sentinels)
// Initialize these shits 


for(i = 0; i < max_sentinels; i++) {

		sentinels[i] = new Object();
		sentinels[i].obj = document.createElement("img");
		// We have to append it inside "playground div" so that position references match.
	   playground.appendChild(sentinels[i].obj);	
		sentinels[i].obj.src = "./images/matrix/sentinel.png"	
	   sentinels[i].obj.style.position = "absolute";
      sentinels[i].obj.style.zIndex = "2000";
      
		sentinels[i].obj.onclick= function(event){ 

		 	ratonx = event.pageX;
		 	ratony = event.pageY;
		 	// alert(ratonx.toString())
	      playground.removeChild(this);	
  		}
   
 }
 
 
// $(document).ready(function() {
//$("#survival_ani").click(function () {
//$(this).hide("explode", { pieces: 64 }, 2000);
//});
//});


for(i = 0; i < max_sentinels; i++) {
	
      // It seems that it takes a while to know the natural dimensions of the image
      // We need to wait some time to obtain them

		sentinels[i].w = ran(mix_w_sent, max_w_sent)
		
		r = 0.8; //get_img_ratio( sentinels[i].obj);
		
		sentinels[i].h = sentinels[i].w/r //r_sent

		sentinels[i].x = ran(playgroundX, playgroundX + playgroundW - sentinels[i].w)
		sentinels[i].y = ran(playgroundY, playgroundY + playgroundH - sentinels[i].h)

		sentinels[i].tao = ran(min_tao, max_tao)
		sentinels[i].siny = ran(min_siny, max_siny)
				
		sentinels[i].destx = ran(playgroundX, playgroundX + playgroundW - sentinels[i].w);
		sentinels[i].desty = ran(playgroundY, playgroundY + playgroundH - sentinels[i].h);	

	   set_xy(sentinels[i].obj, sentinels[i].x, sentinels[i].y) 
		set_wh(sentinels[i].obj, sentinels[i].w, sentinels[i].h) 
}


function move_survival() {

		sin_value = sin_value + vel_y;
		y_value = y_range * Math.sin(sin_value)
		set_y(survival_img, y_offset + y_value);

	   move_sentinels();
}


var time = 0;
function move_sentinels(){

	for(var i = 0; i < sentinels.length; ++i){            

	      // Calc movement
	      
	      
	      dx = sentinels[i].destx - sentinels[i].x  
	      dy = sentinels[i].desty - sentinels[i].y 


	      // Calc Rotation of monster
	      hipotenusa = Math.sqrt(dx*dx + dy*dy)
	      // We rotate the image in the direction of displacement.
	      // Beeing angle 0, the normal image for dx = cte and dy = 0
	      
	      angle = Math.asin(dy/hipotenusa)*Math.PI/2 + 0.5*Math.PI; 

	      // We add pi/2 because Mat.asin gives an output of -1 for -pi/2
	      
	      
	      if (angle > 0.5*Math.PI ){
	      		angle = angle - 0.5*Math.PI;
	     	}
	     	else {
				adf = 4
	     	}
	     	
	     	if (dx > 0){
	     		reflex = 1;
	     		}
	     	else{
	     		reflex = -1;
	     	}
	     	
	     sentinels[i].obj.style.transform = "scaleX("+(reflex).toString()+") rotate("+angle.toString()+"rad)"  	
	     	
	      // Calc new position
			sentinels[i].x = sentinels[i].x + dx/sentinels[i].tao;
			sentinels[i].y =  sentinels[i].y + dy/sentinels[i].tao;
	      
			if (dx*dx + dy*dy < dist_min*dist_min) {
				sentinels[i].destx = ran(playgroundX , playgroundX + playgroundW - sentinels[i].w);
				sentinels[i].desty = ran(playgroundY, playgroundY + playgroundH - sentinels[i].h);	
				
		      dx = sentinels[i].destx - sentinels[i].x  
		      dy = sentinels[i].desty - sentinels[i].y 
				while (dx*dx + dy*dy < (200*200)){  // So that the sentinels travel a minimum distance
					sentinels[i].destx = ran(playgroundX , playgroundX + playgroundW - sentinels[i].w);
					sentinels[i].desty = ran(playgroundY, playgroundY + playgroundH - sentinels[i].h);	
					
			      dx = sentinels[i].destx - sentinels[i].x  
			      dy = sentinels[i].desty - sentinels[i].y 
				}
				
				sentinels[i].tao = ran(min_tao, max_tao)
				sentinels[i].siny = ran(min_siny, max_siny)
				
			}

	      // Check for borders:
/*	      
	      if (sentinels[i].x + sentinels[i].w > playgroundX + playgroundW){
	      	 sentinels[i].x = playgroundX + playgroundW - sentinels[i].w;
	      }
	      
	      if (sentinels[i].x < playgroundX ){
	      	 sentinels[i].x = playgroundX;
	      }	      
	      
	      if (sentinels[i].y + sentinels[i].h > playgroundY + playgroundH){
	      	 sentinels[i].y = playgroundY + playgroundH - sentinels[i].h;
	      }
	      
	      if (sentinels[i].y < playgroundY ){
	      	 sentinels[i].y = playgroundY;
	      }	        
*/      

			// Add sinusoidal movement but just visually
			// We dont want it to affect the angle (dx,dy) coz we get crazy
			time = time + 0.10;
			dysin = sentinels[i].siny * Math.sin(time);
	   
	      // Render moved sentinels
	      set_xy(sentinels[i].obj, sentinels[i].x, sentinels[i].y + dysin ) 
			set_wh(sentinels[i].obj, sentinels[i].w, sentinels[i].h) 

	  } 

}




function move_survival(){
		move_sentinels();
		sin_value = sin_value + vel_y;
		y_value = y_range * Math.sin(sin_value)
		set_y(survival_img, y_offset + y_value)
		
}



    function ran(min, max){  
        return Math.random() * (max - min) + min;  
    } 






