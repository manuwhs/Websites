
var obj_int_flag = 0;  // Flag to know if the objects are falling 
var obj_int = 0;		// SetInterval element (initialized to 0 to put some value and make it global variable)

//animation loop

var time_ms = 120;

var num_text0 = 60;
var num_text1 = 20;
var num_text2 = 20;

var max_texts = num_text0 + num_text1 + num_text2;

var matrix_divs = new Array(max_texts);

var max_vely = 15;
var min_vely = 5;

var max_font_size = 20;
var min_font_size = 10;

var matrix_divs_posx = new Array(max_texts);
var matrix_divs_posy = new Array(max_texts);
var matrix_divs_vely = new Array(max_texts);

var matrix_divs_h = new Array(max_texts);
var matrix_divs_w = new Array(max_texts);


var screenW = screen.width;
var screenH = screen.height;

var screenH = screen.height;
var background_matrix = document.getElementById("background");

// Real lower bound of the background !!
var lower_bound_mov = background_matrix.clientHeight;
var max_width_mov = background_matrix.clientWidth;


// null indicates that the object does not exist.
var i = 0;

// Initialize these shits 
for(var i = 0; i < max_texts; i++) {
		matrix_divs[i] = null;
		matrix_divs_posx[i]  = Math.random()*(max_width_mov - 10);
		matrix_divs_posy[i]  = Math.random()*(lower_bound_mov - 150);
		matrix_divs_vely[i]  = min_vely + Math.random()*(max_vely-min_vely);
}


for(i = 0; i < num_text0; i++) {
	CreateDivText(i);
	SetDivTextParam(matrix_divs_posx[i] ,matrix_divs_posy[i],matrix_divs_vely[i],i,generate_random_01_str (2, 7));
}
for(i = i; i < num_text1 + num_text0; i++) {
	CreateDivText(i);
	SetDivTextParam(matrix_divs_posx[i] ,matrix_divs_posy[i],matrix_divs_vely[i],i,make_text_vertical ("MADRIX"));
}
for(i = i; i < num_text2 + num_text1 + num_text0; i++) {
	CreateDivText(i);
	SetDivTextParam(matrix_divs_posx[i] ,matrix_divs_posy[i],matrix_divs_vely[i],i,make_text_vertical ("SC15"));
}


function CreateDivText(number){
	var texto = document.createElement("div");
	texto.id = "div_matrix" + number.toString();
	
	background_matrix.appendChild(texto);  
	
	matrix_divs[number] = texto;
	
	texto.onclick= function(event){ 
		coordenadas(event);
	//	alert(this.clientWidth.toString());
		this.style.fontSize = "20px"
		
   }
}


function  SetDivTextParam(x,y,vely,number,str) {
	
	texto = matrix_divs[number];
	// texto.innerHTML = "<img src='./images/matrix/flake.jpg'>";
	
	texto.innerHTML = str;
	
	texto.style.position = "absolute";	
	texto.style.left = x.toString()+"px";
	texto.style.top = y.toString()+"px";
	texto.style.zIndex = "-1";

	texto.style.fontSize = (min_font_size + Math.random()*(max_font_size-min_font_size)).toString()+"px";
	texto.style.textAlign = "center";
	

	matrix_divs_posx[number]  = x;
	matrix_divs_posy[number]  = y;
	matrix_divs_vely[number]  = vely;
	matrix_divs_h[number]  = texto.clientHeight;
	matrix_divs_w[number]  = texto.clientWidth;

} 


function DeleteDiv(number) {
	var texto = document.getElementById("div_matrix" + num_texts.toString());
	document.removeChild (texto);  
	matrix_divs[number] = null;
} 


function move_matrix(){

	for(var i = 0; i < max_texts; i++) {
		if (matrix_divs[i]!= null){

			matrix_divs_posx[i]  = matrix_divs_posx[i];
			matrix_divs_posy[i]  = matrix_divs_posy[i] + matrix_divs_vely[i];

			if (matrix_divs_posy[i]>lower_bound_mov - matrix_divs_h[i]){
				// New random shit 
				matrix_divs_posx[i]  = Math.random()*max_width_mov;
				matrix_divs_posy[i]  = 10;
				matrix_divs_vely[i]  = min_vely+Math.random()*(max_vely-min_vely);
				
				
			}
			
			matrix_divs[i].style.left = matrix_divs_posx[i].toString()+"px";
			matrix_divs[i].style.top = matrix_divs_posy[i].toString()+"px";		
			
		}

	}
}


function generate_random_01_str (min01, max01){
	num_01 = min01 + Math.random()*(max01-min01)
	text_out = "";
	for(var i = 0; i < num_01; i++) {
		if (Math.random() > 0.5 ){
			text_out = text_out + "0<br>"
		}
		else {
			text_out = text_out + "1<br>"
		}
	}
	return text_out;
}


function make_text_vertical (text_in){

	text_out = "";
	for(var i = 0; i < text_in.length; i++) {
		text_out = text_out + text_in[i]+"<br>";
	}
	return text_out;
}


function coordenadas(event) {
 	ratonx = event.pageX;
 	ratony = event.pageY;
}






















