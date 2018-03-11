
//window.onresize = function(event) {
//	header_resize ();
//	content_resize ();
	
//}
	
window.onload = function(event) {
	header_resize ();
content_resize ();

}


function content_resize (){
	
	var video_div = document.getElementById("video_id");
//alert("pepe")
	ratio = 2850 / 416; // Original image ratio
	
	video_div.style.width = (50).toString()+"%";  
	max_width = video_div.clientWidth;      // Get the relative size in pixels of the image in the screen
video_div.style.height = (max_width/ratio).toString()+"px";
	
	
	var academic = document.getElementById("academic");
	
	ratio = 671 / 325; // Original image ratio
	
	academic.style.width = (50).toString()+"%";  

	max_width = academic.clientWidth;      // Get the relative size in pixels of the image in the screen
academic.style.height = (max_width/ratio).toString()+"px";
	

}