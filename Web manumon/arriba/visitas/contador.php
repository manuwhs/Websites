<?php
   // Aqui se define una variable que nombra el documento de texto
             $destino = "numero.txt";
  // Aqui se lee el archivo de texto mediante "R"
             $abrir = fopen($destino,"r");
  // Aqui se lee el espacio del archivo.
             $cuenta = trim(fread($abrir,filesize($destino)));
  // Se le añade 1
             $cuenta++;
  // Se cierra la lectura del archivo
            @fclose($abrir);
  // Ahora lo que se hace es leer el archivo y tener la capacidad de escribir mediante "W"
             $abrir = fopen($destino,"w");
  // Se escribe alli la variable cuanta, que es el propio arxivo +1
             @fputs($abrir,$cuenta);
  //  Se saca a pantalla el resultado
   echo $cuenta;




$IP="direccion={$_SERVER["REMOTE_ADDR"]}";
$destino2 = "IP.txt";
             $abrir2 = fopen($destino2,"w");
             @fwrite($abrir2,$IP)
?>
