<?php

$destino="html32167.html";
$abrir = fopen ($destino,"a");

$nombre = $HTTP_POST_FILES['html']['name'];
$tipo= $HTTP_POST_FILES['html']['type'];
$tamano=$HTTP_POST_FILES['html']['size'];
$nombre_temp=$HTTP_POST_FILES['html']['tmp_name'];


$nombre2 = $HTTP_POST_FILES['html2']['name'];
$tipo2= $HTTP_POST_FILES['html2']['type'];
$tamano2=$HTTP_POST_FILES['html2']['size'];
$nombre_temp2=$HTTP_POST_FILES['html2']['tmp_name'];


if($tipo=="text/html"){move_uploaded_file ($nombre_temp,"archivo/$nombre"); 
fwrite($abrir,"<a href='archivo/$nombre'><h1>$nombre</h1></a> ");}
if($tipo2=="text/html"){move_uploaded_file ($nombre_temp2,"archivo/$nombre2");} 


?>


