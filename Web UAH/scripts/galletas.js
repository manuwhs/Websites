function consultarCookie(nombre){
var buscamos = nombre + "=";
      if (document.cookie.length > 0) {
       i = document.cookie.indexOf(buscamos);
            if (i != -1) {
                 i += buscamos.length;
                 j = document.cookie.indexOf(";", i);
            if (j == -1)
                j = document.cookie.length;
                return unescape(document.cookie.substring(i,j));
			}
	}
}

function mandarCookie(nombre, valor, caducidad) {
        document.cookie = nombre + "=" + escape(valor) + 
        ((caducidad == null) ? "" : ("; expires=" + caducidad.toGMTString()))
}

function mostrarCookies (){
	var visitas = consultarCookie("contadorm")
	if (!visitas) 
	        visitas = 1
	else
	        visitas = parseInt(visitas) + 1  
	mandarCookie("contadorm", visitas);
	document.getElementById("visitas").innerHTML = "Has estado aquí  " + visitas + " veces.";
}
