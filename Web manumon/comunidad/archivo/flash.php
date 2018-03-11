<?php

$destino="flash32167.html";
$abrir = fopen ($destino,"a");

$nombre = $HTTP_POST_FILES['flas']['name'];
$tipo= $HTTP_POST_FILES['flas']['type'];
$tamano=$HTTP_POST_FILES['flas']['size'];
$nombre_temp=$HTTP_POST_FILES['flas']['tmp_name'];
echo $tipo;

$nombre2 = $HTTP_POST_FILES['flas2']['name'];
$tipo2= $HTTP_POST_FILES['flas2']['type'];
$tamano2=$HTTP_POST_FILES['flas2']['size'];
$nombre_temp2=$HTTP_POST_FILES['flas2']['tmp_name'];

$nombre3 = $HTTP_POST_FILES['flas3']['name'];
$tipo3= $HTTP_POST_FILES['flas3']['type'];
$tamano3=$HTTP_POST_FILES['flas3']['size'];
$nombre_temp3=$HTTP_POST_FILES['flas3']['tmp_name'];

$nombre4 = $HTTP_POST_FILES['flas4']['name'];
$tipo4= $HTTP_POST_FILES['flas4']['type'];
$tamano4=$HTTP_POST_FILES['flas4']['size'];
$nombre_temp4=$HTTP_POST_FILES['flas4']['tmp_name'];


if($tipo=="application/x-shockwave-flash"){move_uploaded_file ($nombre_temp,"flash/$nombre"); 
fwrite($abrir,"<a href='flash/$nombre'><h1>$nombre</h1></a> ");}

if($tipo2=="application/x-shockwave-flash"){move_uploaded_file ($nombre_temp2,"flash/$nombre2"); 
fwrite($abrir,"<a href='flash/$nombre2'><h1>$nombre2</h1></a> ");}

if($tipo3=="application/x-shockwave-flash"){move_uploaded_file ($nombre_temp3,"flash/$nombre3"); 
fwrite($abrir,"<a href='flash/$nombre3'><h1>$nombre3</h1></a> ");}

if($tipo4=="application/x-shockwave-flash"){move_uploaded_file ($nombre_temp4,"flash/$nombre4"); 
fwrite($abrir,"<a href='flash/$nombre4'><h1>$nombre4</h1></a> ");}

?>


