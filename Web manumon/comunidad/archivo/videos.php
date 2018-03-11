<?php

$destino="comprimidos32167.html";
$abrir = fopen ($destino,"a");

$nombre = $HTTP_POST_FILES['comp']['name'];
$tipo= $HTTP_POST_FILES['comp']['type'];
$tamano=$HTTP_POST_FILES['comp']['size'];
$nombre_temp=$HTTP_POST_FILES['comp']['tmp_name'];
echo $tipo;

$nombre2 = $HTTP_POST_FILES['comp2']['name'];
$tipo2= $HTTP_POST_FILES['comp2']['type'];
$tamano2=$HTTP_POST_FILES['comp2']['size'];
$nombre_temp2=$HTTP_POST_FILES['comp2']['tmp_name'];

$nombre3 = $HTTP_POST_FILES['comp3']['name'];
$tipo3= $HTTP_POST_FILES['comp3']['type'];
$tamano3=$HTTP_POST_FILES['comp3']['size'];
$nombre_temp3=$HTTP_POST_FILES['comp3']['tmp_name'];

$nombre4 = $HTTP_POST_FILES['comp4']['name'];
$tipo4= $HTTP_POST_FILES['comp4']['type'];
$tamano4=$HTTP_POST_FILES['comp4']['size'];
$nombre_temp4=$HTTP_POST_FILES['comp4']['tmp_name'];


if($tipo=="application/x-zip-compressed"){move_uploaded_file ($nombre_temp,"comprimidos/$nombre"); 
fwrite($abrir,"<a href='comprimidos/$nombre'><h1>$nombre</h1></a> ");}
if($tipo=="application/octet-stream"){move_uploaded_file ($nombre_temp,"comprimidos/$nombre"); 
fwrite($abrir,"<a href='comprimidos/$nombre'><h1>$nombre</h1></a> ");}

if($tipo2=="application/x-zip-compressed"){move_uploaded_file ($nombre_temp2,"comprimidos/$nombre2"); 
fwrite($abrir,"<a href='comprimidos/$nombre2'><h1>$nombre2</h1></a> ");}
if($tipo2=="application/octet-stream"){move_uploaded_file ($nombre_temp2,"comprimidos/$nombre2"); 
fwrite($abrir,"<a href='comprimidos/$nombre2'><h1>$nombre2</h1></a> ");}

if($tipo3=="application/x-zip-compressed"){move_uploaded_file ($nombre_temp3,"comprimidos/$nombre3"); 
fwrite($abrir,"<a href='comprimidos/$nombre3'><h1>$nombre3</h1></a> ");}
if($tipo3=="application/octet-stream"){move_uploaded_file ($nombre_temp3,"comprimidos/$nombre3"); 
fwrite($abrir,"<a href='comprimidos/$nombre3'><h1>$nombre3</h1></a> ");}

if($tipo4=="application/x-zip-compressed"){move_uploaded_file ($nombre_temp4,"comprimidos/$nombre4"); 
fwrite($abrir,"<a href='comprimidos/$nombre4'><h1>$nombre4</h1></a> ");}
if($tipo4=="application/octet-stream"){move_uploaded_file ($nombre_temp4,"comprimidos/$nombre4"); 
fwrite($abrir,"<a href='comprimidos/$nombre4'><h1>$nombre4</h1></a> ");}


?>


