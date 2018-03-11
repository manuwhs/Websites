
// Size of the screen
var screenW = screen.width;
var screenH = screen.height;

//alert ("Screen Size: " + screenW.toString() + "x" + screenH.toString() );

// Size of the browser window. This values are affected by the browsed magnification settings 
// For example if magnification is 150%, this values will decreased by a factor of 1.5
var windowW = window.innerWidth;
var windowH = window.innerHeight;

//alert ("Screen Size: " + windowW.toString() + "x" + windowH.toString() )

// Size of the visual page. This values are affected by the browsed magnification settings 
// For example if magnification is 150%, this values will decreased by a factor of 1.5
var bodyW = document.documentElement.clientWidth
var bodyH = document.documentElement.clientHeight

 alert ("Screen Size: " + bodyW.toString() + "x" + bodyH.toString() )

// THE SIZE VALUES OF ANY OBJECT (div, image...) ARE OBTAINED USING THE PROPERTY .clientWidth
// For example if we had a div with id "background", then the sizes of the div are obtained using
// their CSS property "style".


////////////////////////////////////////////////
/////////////   SIZE OF A DIV   ////////////////
////////////////////////////////////////////////

// The Divs have a problem, a div is just a block that contains another elements of different sizes.
// Ideally, the divs dimensions will just cover all the objects... but this is not suitable for 
// complex cases.

// We can set the height and width of a div using CSS properties width and height. 
// But what happens when the objects inside the div are bigger than the div ?
// Standrd CSS rules says that the size of the div must not change... will the part of the elements
// outside the div dimensions be viewable ?. For that we use the property Overflow.

//  HOW DO WE GET THE CSS sizes and the real viewable sizes ?

// Use CSS properties  element.style.width  and bg.style.height to get them.
// Problem is, if you didnt set this values before, they will return nothing.

bg = document.getElementById("background");

bgW_CSS = bg.style.width;
bgH_CSS = bg.style.height;

// alert ("Screen Size: " + bgW_CSS.toString() + "x" + bgH_CSS.toString() )

// Use element properties  element.clientWidth  and clientHeight to get the real viewed size
// of the objects.

bgW = bg.clientWidth;
bgH = bg.clientHeight;

// These properties just have the size of the object including the padding.
//Use the offsetHeight and offsetWidth properties to return the viewable
// height and width of an element, including padding, border and scrollbar.
 
 
// alert ("Screen Size: " + bgW.toString() + "x" + bgH.toString() )

// alert("funciones")


	BEST_logo = document.getElementById("BEST_logo");
	alert(BEST_logo)
	get_img_ratio(BEST_logo)
	
	alert(get_img_ratio(BEST_logo).toString())
	

var stdW = 1360;
var stdH = 768;



// For the container: We want it to be 80% of the the total.

  width: 85%;




	
