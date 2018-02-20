

// Size of the visual page. This values are affected by the browsed magnification settings 
// For example if magnification is 150%, this values will decreased by a factor of 1.5
var bodyW = document.documentElement.clientWidth
var bodyH = document.documentElement.clientHeight

// alert ("Screen Size: " + bodyW.toString() + "x" + bodyH.toString() )

var stdW = 1360;
var stdH = 768;

var realW = stdW;
var realH = stdH;

// For the container: We want it to be 80% of the the total.

var container = document.getElementById("container");
var containerW = 0.75 * realW;
set_w(container,containerW);
// alert(containerW.toString())

// For the content: We want it to be 85% of the the container.

content_div = document.getElementById("content");
content_divW = 0.85 * containerW;
set_w(content_div,content_divW);
// alert(content_divW.toString())

//alert(content_divW.toString())
// For the mainpic: We want to size it according to the container size.
// We want to be able the logos anywhere inside it. 
// The big image is a background image.


mainpic = document.getElementById("mainpic");
r = get_img_ratio(mainpic);
set_wh(mainpic, containerW , containerW / r)

BEST_logo = document.getElementById("BEST_logo");
r = get_img_ratio(BEST_logo);
w_aux =  containerW * 0.15 ;
set_wh(BEST_logo, w_aux, w_aux/r );

UC3M_logo = document.getElementById("UC3M_logo");
r = get_img_ratio(UC3M_logo);
w_aux =  containerW * 0.15 ;
set_wh(UC3M_logo, w_aux, w_aux/r );

// For the menu !!




