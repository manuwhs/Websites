$(document).ready(function() {
	load_tables("1");


///   ************* FORMATO DE LA TABLA ************* \\\

// Sucesos al hacer click en una pestaña
$("ul.tabs li").click(function() {

	aux = $(this)[0].id.split("tab")[1];
	load_tables(aux);
});
});

function load_tables(num){

	var xmlhttp;
	aux = num;
	// alert(aux);
	
	if (window.XMLHttpRequest){		// code for IE7+, Firefox, Chrome, Opera, Safari
	  	xmlhttp=new XMLHttpRequest();
	}
	else{							// code for IE6, IE5
	  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function(){
	
						
	  if (xmlhttp.readyState==4) {  		//Tenemos el resultado ya
	    	document.getElementById("main_table").innerHTML = xmlhttp.responseText;

	    	$(".contenido_tab table").css({	// Propiedad general de la tabla
			'fontSize' : '15px',
			'width' : '800px',
			'height' : '200px',
			'color' : 'white',
			'text-align' : 'center',
			'background':'green',
			'margin-left' :'10px',
			'border-color': 'red black',
		  	'border-width': '10px',
		  	'border-style': 'solid'
		});   
		
		
		$(".contenido_tab tr:odd").css({		// Filas impares
			'fontSize' : '15px',
			'color' : 'red',
			'text-align' : 'center',
			'background':'#333',
			'margin-left' :'10px',
			'border-color': 'red black',
		  	'border-width': '10px',
		  	'border-style': 'solid',
		  	'margin-top': '100px'
		}); 
	  }

	}

	xmlhttp.open("GET","tablas/tabla"+aux+".txt",true);
	xmlhttp.send();
}




