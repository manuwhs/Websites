// prepare the form when the DOM is ready 

	var num_img = 12;	// Numero de imagenes
	var aux, aux2, num_aux;

$(document).ready(function() {
	$("#gallery li img").slice(1,5).click(function(){
	if ($('#main-img')[0].src != $(this)[0].src.replace('thumb/', '')){
		aux2 = $(this)[0].src.split("img_")[1].replace(".jpg","");
		
		document.getElementById("numero").innerHTML = aux2+"/"+(num_img).toString();
			
		$('#main-img').css('opacity',0);
		$('#main-img').attr('src',$(this).attr('src').replace('thumb/', ''));		
		$('#main-img').animate({
			opacity:'1.0'
				
		}); 	
	}
	});  
	

	
	
	/// ***********************   BOTON DERECHA  ********************** \\
	
$("#gallery li img").last().click(function(){
	// Cambiamos la imagen que enseñamos en todos por una de valor inferior, si una de ellas es el 0,
	// tendremos que poner la ultima
	
	aux = $("#gallery li img").slice(1,5)
	
	for(i=0; i < aux.length; i++){
	
		aux2 = aux[i].src.split("img_")[1].replace(".jpg",""); // Con esta linea obtenemos el numero de la imagen
		
															  // en alfanumerico, hay que pasar a int
															  	
													
		num_aux = parseInt(aux2);

		if (num_aux == num_img){					// Si estamos viendo ya ultima imagen
			$("#gallery li img").slice(i+1,i+2).attr("src",aux[i].src.replace(aux2,"1" ));
		}
		else{
			$("#gallery li img").slice(i+1,i+2).attr("src",aux[i].src.replace(aux2,(num_aux+1).toString()) );
			
			// No me deja poder cambiar atributos con aux[i]... asique lo cortamos conveientemente
			//alert(aux[i].src);
		}													
	}
	
	});	
	
/// ***********************   BOTON IZQUIERDA ********************** \\

$("#gallery li img").first().click(function(){
	// Cambiamos la imagen que enseñamos en todos por una de valor inferior, si una de ellas es el 0,
	// tendremos que poner la ultima
	
	aux = $("#gallery li img").slice(1,5)
	
	for(i=0; i < aux.length; i++){
	
		aux2 = aux[i].src.split("img_")[1].replace(".jpg",""); // Con esta linea obtenemos el numero de la imagen
		
															  // en alfanumerico, hay que pasar a int
															
		num_aux = parseInt(aux2);

		if (num_aux == 1){					// Si estamos viendo la primera tendremos que poner la ultima
			$("#gallery li img").slice(i+1,i+2).attr("src",aux[i].src.replace(aux2,num_img.toString() ));
		}
		else{
			$("#gallery li img").slice(i+1,i+2).attr("src",aux[i].src.replace(aux2,(num_aux-1).toString()) );
			
			// No me deja poder cambiar atributos con aux[i]... asique lo cortamos conveientemente
			//alert(aux[i].src);
		}														
	}	
		
		
	});
	
// Precargar de imagenes para agilizar

	var imgSwap = [];
	 $("#gallery li img").each(function(){
		imgUrl = this.src.replace('thumb/', '');
		imgSwap.push(imgUrl);
	});
	$(imgSwap).preload();
});
$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
