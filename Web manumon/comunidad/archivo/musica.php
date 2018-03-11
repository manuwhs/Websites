<?php

$destino="musica32167.html";
$abrir = fopen ($destino,"a");

$nombre = $HTTP_POST_FILES['musi']['name'];
$tipo= $HTTP_POST_FILES['musi']['type'];
$tamano=$HTTP_POST_FILES['musi']['size'];
$nombre_temp=$HTTP_POST_FILES['musi']['tmp_name'];
echo $tipo;

$nombre2 = $HTTP_POST_FILES['musi2']['name'];
$tipo2= $HTTP_POST_FILES['musi2']['type'];
$tamano2=$HTTP_POST_FILES['musi2']['size'];
$nombre_temp2=$HTTP_POST_FILES['musi2']['tmp_name'];

$nombre3 = $HTTP_POST_FILES['musi3']['name'];
$tipo3= $HTTP_POST_FILES['musi3']['type'];
$tamano3=$HTTP_POST_FILES['musi3']['size'];
$nombre_temp3=$HTTP_POST_FILES['musi3']['tmp_name'];

$nombre4 = $HTTP_POST_FILES['musi4']['name'];
$tipo4= $HTTP_POST_FILES['musi4']['type'];
$tamano4=$HTTP_POST_FILES['musi4']['size'];
$nombre_temp4=$HTTP_POST_FILES['musi4']['tmp_name'];


if($tipo=="audio/mpeg"){move_uploaded_file ($nombre_temp,"musica/$nombre"); 
fwrite($abrir,"<a href='musica/$nombre'><h1>$nombre</h1></a> ");}

if($tipo=="audio/x-ms-wma"){move_uploaded_file ($nombre_temp,"musica/$nombre"); 
fwrite($abrir,"<a href='musica/$nombre'><h1>$nombre</h1></a> ");}

if($tipo2=="audio/mpeg"){move_uploaded_file ($nombre_temp2,"musica/$nombre2"); 
fwrite($abrir,"<a href='musica/$nombre2'><h1>$nombre2</h1></a> ");}
if($tipo2=="audio/x-ms-wma"){move_uploaded_file ($nombre_temp2,"musica/$nombre2"); 
fwrite($abrir,"<a href='musica/$nombre2'><h1>$nombre2</h1></a> ");}

if($tipo3=="audio/mpeg"){move_uploaded_file ($nombre_temp3,"musica/$nombre3"); 
fwrite($abrir,"<a href='musica/$nombre3'><h1>$nombre3</h1></a> ");}
if($tipo3=="audio/x-ms-wma"){move_uploaded_file ($nombre_temp3,"musica/$nombre3"); 
fwrite($abrir,"<a href='musica/$nombre3'><h1>$nombre3</h1></a> ");}

if($tipo4=="audio/mpeg"){move_uploaded_file ($nombre_temp4,"musica/$nombre4"); 
fwrite($abrir,"<a href='musica/$nombre4'><h1>$nombre4</h1></a> ");}
if($tipo4=="audio/x-ms-wma"){move_uploaded_file ($nombre_temp4,"musica/$nombre4"); 
fwrite($abrir,"<a href='musica/$nombre4'><h1>$nombre4</h1></a> ");}


?>


