
//////////// FUNCTIONS TO DO WITH SIZES
function get_wh(element) {
// We use the CSS because its the property we can change
	w = element.style.width;
	h = element.style.height;
	
	s = new Array(2);
	s[0]= w;
	s[1]= h;
	
	return s;
}

function set_wh(element, w, h) {
// We use the CSS because its the property we can change
	element.style.width = w.toString()+"px";
	element.style.height = h.toString()+"px";
	
}


function get_w(element) {
	return element.style.width;
}
function get_h(element) {
	return element.style.height;
}
function set_w(element, w) {
	element.style.width = w.toString()+"px";
}
function set_h(element, h) {
	element.style.height = h.toString()+"px";
}


function print_wh(element) {
// We use the CSS because its the property we can change
	w = element.style.width;
	h = element.style.height;
	
	alert ("Size: " + w.toString() + "x" + h.toString() )

}

//////////// FUNCTIONS TO DO WITH POSITION


function get_xy(element) {
// We use the CSS because its the property we can change
	x = element.style.left;
	y = element.style.top;
	
	p = new Array(2);
	p[0]= x;
	p[1]= y;
	
	return p;
}

function set_xy(element, x, y) {
// We use the CSS because its the property we can change
	element.style.left = x.toString()+"px";
	element.style.top = y.toString()+"px";
	
}

function get_x(element) {
	return element.style.left;
}
function get_y(element) {
	return element.style.top;
}
function set_x(element, x) {
	element.style.left = x.toString()+"px";
}
function set_y(element, y) {
	element.style.top = y.toString()+"px";
}





function print_xy(element) {
// We use the CSS because its the property we can change
	x = element.style.width;
	y = element.style.height;
	
	alert ("Position: " + x.toString() + " , " + y.toString() )

}


/////////////////////////////////////////////////////////////////////
/// Functions to do with images.
// How to get the natural dimensions of an image, even after beeing modified with CSS ??
// Just use the properties naturalHeight and natural Width.

function get_img_ratio(img) {

	w = img.naturalWidth;
	h = img.naturalHeight;
	ratio = w / h;
	
	return ratio;

}




