function validate_Email_js() {
	var x= document.forms["miniform"]["email"].value;
	var atpos = x.indexOf("@");
	var dotpos = x.lastIndexOf(".");
	if (atpos<1 || dotpos<atpos+2 || dotpos+2 >= x.length){
  		return false;
  	}
}

function validate_Email_Regex() {
	var x= document.forms["miniform"]["email"].value;
	var patt=/^[A-Za-z0-9._%+-]+@[a-zA-Z]+(\.([a-zA-Z0]+))*$/g;
	if (patt.test(x) == false) {
		return false;
	}
	return true;
}
