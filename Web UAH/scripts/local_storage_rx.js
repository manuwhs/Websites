

function MuestraNombre() {
	// alert("Nombre cargado");

	if (typeof(Storage)!=="undefined") {
		if(typeof(localStorage.fname)=="undefined") {
			localStorage.fname = "Usuario";
		}
		document.getElementById("informacion").innerHTML = "Hola "+ localStorage.fname + ": Bienvenido a la Estación UAH-POL.";
	}
	else {
		document.getElementById("informacion").innerHTML="Sorry, your browser does not support web storage...";
	}
	localStorage.removeItem("fname");
}

function MuestraForm(){
	if (typeof(Storage)!=="undefined") {
			if(localStorage.error == 0) {
					document.getElementById("counti").innerHTML = localStorage.country;
					document.getElementById("citi").innerHTML = localStorage.city;
					document.getElementById("locai").innerHTML = localStorage.location;
					document.getElementById("mapsi").innerHTML ="<a href="+localStorage.gps+ " class=\"blanco\">Google Maps</a>";
				    //localStorage.removeItem("error");
			}
	}
}


function MuestraFecha(){
			hoy = new Date()
			ano = hoy.getFullYear()
			mes = hoy.getMonth() + 1
			dia = hoy.getDate()
			document.getElementById("fecha").innerHTML = "Fecha: "+ano+", "+mes+", "+dia+"<br>";
}


function Mostrar() {
	MuestraNombre();
	MuestraForm();
	MuestraFecha();
}

function abrir_gps (){
	if (localStorage.gps != undefined)
	coord_gps = open(localStorage.gps,"GPS")
	else {
		coord_gps = open("https://maps.google.es/","GPS")
	}
}


