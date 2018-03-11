function mostrar_errores() {
	// alert("Mostrando errores");
	var ind_k = 2;
	if (typeof(Storage)=="undefined") {
		alert("No hay localStorage");
	}
	else{
		if(localStorage.error == 1) {
			// alert(localStorage.errores.toString());
			if (localStorage.errores[ind_k*0] == 1) {
				document.getElementById("countrye").innerHTML = " País desconocido";
			}
			else {
				document.getElementById("countrye").innerHTML = "";
			}
			
			if (localStorage.errores[ind_k*4] == 1) {
				document.getElementById("citye").innerHTML = " Ciudad Errónea ";
			}
			else {
				document.getElementById("citye").innerHTML = "";
			}
			
			if (localStorage.errores[ind_k*5] == 1) {
				document.getElementById("locatione").innerHTML = " Location Erronea ";
			}
			else {
				document.getElementById("locatione").innerHTML = "";
			}
			
			if (localStorage.errores[ind_k*1] == 1) {
				document.getElementById("passe").innerHTML = "Contraseña demasiado corta ";
			}
			else {
				document.getElementById("passe").innerHTML = "";
			}
			
			if (localStorage.errores[ind_k*2] == 1) {
				document.getElementById("ae").innerHTML = "Temperartura fuera de rango";
			}
			else {
				document.getElementById("ae").innerHTML = "";
			}
			
			if (localStorage.errores[ind_k*3] == 1) {
				document.getElementById("be").innerHTML = "Temperatura fuera de rango";
			}
			else {
				document.getElementById("be").innerHTML = "";
			}
			
		}
	}
localStorage.removeItem("error");
return false;
}

function get_Errors() {
	var error = 0;
	var data = new Array(8);
	var error_fuente= new Array(8);
	var tb;
	
	data[0] = document.forms["formu"]["count"].value;
	data[1] = document.forms["formu"]["pass"].value;
	data[2] = document.forms["formu"]["a"].value;
	data[3] = document.forms["formu"]["b"].value;
	data[4] = document.forms["formu"]["city"].value;
	data[5] = document.forms["formu"]["loca"].value;
	data[7] = data[1].length;
	data[8] = document.forms["formu"]["estac"].value;

	if(typeof(Storage)=="undefined") {
	    alert("Sorry, your browser does not support web storage...");
		window.location.href = "../index.html";
		return 0;
	}

	
	for (i = 0; i < 8; i++) {
		error_fuente[i] = 0;
	}
	

	if(data[7]<5){
	  error = 1;
	  error_fuente[1] = 1;
	}
	
	if(!(parseInt(data[2])>10 && parseInt(data[2])<50)){  
		error = 1;
	  	error_fuente[2] = 1;
	}
	 if (!(parseInt(data[3])>-10 &&  parseInt(data[3])<20)){
		error = 1;
	  	error_fuente[3] = 1;
	}
	if (parseInt(data[2]) < parseInt(data[3])){
		error = 1;
	  	error_fuente[2] = 1;
	  	error_fuente[3] = 1;
	}
	
	
	// Usando DOM para conseguir todas las opciones del datalist
	tb = document.getElementsByTagName("option"); 
	error_fuente[0] = 1;
	for (i = 0; i < tb.length; i++){
	// alert(tb[i].value);
		if (tb[i].value == data[0]){
			
			error_fuente[0] = 0;
			break;
		}
	}

	if (check_Coordinates()== 0){	
			error = 1;
	  		error_fuente[5] = 1;
	}
	
// alert(error_fuente.toString());
	if (error == 0) {

		localStorage.error = 0; 
		localStorage.country = data[0]; 
		localStorage.passlen = data[7];
		localStorage.a = data[2];
		localStorage.b = data[3];
		localStorage.city = data[4];
		localStorage.location = data[5];
		localStorage.gps = gps(data[5]);
		localStorage.estacion = data[8];
		// window.location.href = "./index.html";
		//alert("Formulacio Correcto");

	}
	else {

		localStorage.error = 1; 
		localStorage.errores = error_fuente; 
		// window.location.href = "./config.html";
		// alert("Error");
		mostrar_errores();
		return false;


	}
	
}

function pass_strength() {
	var l = document.forms["formu"]["pass"].value.length;
	var doc = document.getElementsByName("passito");
	var i;
	
	if (l<5) {
		doc[0].innerHTML = "<span style =\"background-color:red\">&nbsp&nbsp&nbsp <\span>";
		doc[0].innerHTML += "&nbsp&nbsp Seguridad Muy Baja "
	}
	if (l >= 5 && l <8){
		doc[0].innerHTML = "<span style =\"background-color:orange\">&nbsp&nbsp&nbsp&nbsp&nbsp <\span>"; 
		doc[0].innerHTML += "&nbsp&nbsp Seguridad Baja";
	}
	if (l >= 8 && l <=10){
		doc[0].innerHTML = "<span style =\"background-color:yellow\">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <\span>";
		 doc[0].innerHTML += "&nbsp&nbsp Seguridad Normal";
	}
	if ( l > 10){
		doc[0].innerHTML = "<span style =\"background-color:green\">&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp <\span>";
		doc[0].innerHTML += "&nbsp&nbsp Seguridad Alta";
	}
	
}

function check_Coordinates()  {
	var x = document.forms["formu"]["loca"].value;

	var patt=/^(N|S)\s[0-9-]+º\s[0-9]+'\s[0-9]+'',\s(E|O)\s[0-9-]+º\s[0-9]+'\s[0-9]+''$/g;
	var patt2 = /^[0-9.-]+,\s?[0-9.-]+$/g;
	
	if (patt.test(x) == true || patt2.test(x) == true) {
		return 1;
	}
	else {
		return 0;
	}
}

function gps(coordenadas){

	 // alert("map guardada");
	var cad='https://maps.google.com/maps?q=+';
	var resultado;
	var uno = 0, dos = 0;
	
	var patt=/^(N|S)\s[0-9-]+º\s[0-9]+'\s[0-9]+'',\s(E|O)\s[0-9-]+º\s[0-9]+'\s[0-9]+''$/g;
	var patt2 = /^[0-9.-]+,\s?[0-9.-]+$/g;
	
	if (patt.test(coordenadas) == true) {

		resultado = coordenadas.replace(/(O\s|S\s)/gi,'-');
		resultado = resultado.replace(/(N\s|E\s)/gi,'');
		resultado = resultado.replace(/\s/gi,'+');
		resultado = cad + resultado;
		return resultado;
	}	
	else if (patt2.test(coordenadas) == true) {
		coordenadas = coordenadas.replace(/\s/gi,'');
		resultado = cad + coordenadas;
		return resultado;
	}
}
	




