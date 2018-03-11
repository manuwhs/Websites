
function setName() {
	//alert ("Nombre guardado: " + document.formulario.nombre.value);

	if(typeof(Storage)!=="undefined") {
		localStorage.fname = document.formulario.nombre.value;
	}
	else {
		document.getElementById("nombre").innerHTML="Sorry, your browser does not support web storage...";
	}
	// window.location.href = "../index.html";
	// Con esta linea volvemos a la pagina anterior (No es necesaria si en el formulario tenemos action=  "index.html"
}

function MuestraNavegador(){
	var codificador = navigator.appCodeName
	var navegador = navigator.appName
	var version = navigator.appVersion
	var enlinea = navigator.onLine
	var cockies = navigator.cookieEnabled
	if (cockies == true)
		cockies = "Permitidas";
	else 
		cockies = "No permitidas";
	var plataforma = navigator.platform
	document.getElementById("naveg").innerHTML = "Navegador: "+navegador+"<br>"+"Codificador: "+codificador+"<br>"+
		"Version: "+version+"<br>"+"Plataforma: "+plataforma+"<br>"+"Cookies: "+cockies+"<br>" ;
}
