

function fonds(){
//alert("fondo");

	var z=localStorage.estacion;
		if(z=="Invierno"){
		document.body.style.backgroundImage="url('images/invierno.jpg')";
		}
		else if(z=="Otoño"){
		document.body.style.backgroundImage="url('images/otono.jpg')";
		}
		else if(z=="Primavera"){
		document.body.style.backgroundImage="url('images/primavera.jpg')";
		}
		else if(z=="Verano"){
		document.body.style.backgroundImage="url('images/verano.jpg')";
		}
		else{
		document.body.style.backgroundImage="url('images/meteo.jpg')";
		}
}
