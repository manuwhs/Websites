

// load_home();
/*
if (window.File && window.FileReader && window.FileList && window.Blob) {
  // Great success! All the File APIs are supported.
  alert("d")
} else {
  alert('The File APIs are not fully supported in this browser.');
}
*/

// alert($("#content").load("./home.html"));



function load_home(){
	document.getElementById("content").innerHTML='<object type="text/html" data="home.html" ></object>';
}
function survival_home(){
	document.getElementById("content").innerHTML='<object type="text/html" data="survival.html" ></object>';
}