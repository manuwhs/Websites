function loadTEXTDoc(){
	var xmlhttp;
	if (window.XMLHttpRequest){		// code for IE7+, Firefox, Chrome, Opera, Safari
	  	xmlhttp=new XMLHttpRequest();
	}
	else{							// code for IE6, IE5
	  	xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	xmlhttp.onreadystatechange = function(){
						
	  if (xmlhttp.readyState==4) {  		//Tenemos el resultado ya
	    	document.getElementById("citiesi").innerHTML = xmlhttp.responseText;
	    	 alert("Estado HTML "+xmlhttp.status.toString());
	  }
	  
	}
	count = document.forms["formu"]["count"].value;
	
	aux = $("#countriesi option");

	for (i = 0; i < aux.length; i++){
		if (aux[i].value == count){		
			xmlhttp.open("GET","ciudades/"+count+".txt",true);
			xmlhttp.send();
		}
	}

}

