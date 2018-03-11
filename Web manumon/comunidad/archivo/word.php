<?php

$destino="word32167.html";
$abrir = fopen ($destino,"a");

$nombre = $HTTP_POST_FILES['word']['name'];
$tipo= $HTTP_POST_FILES['word']['type'];
$tamano=$HTTP_POST_FILES['word']['size'];
$nombre_temp=$HTTP_POST_FILES['word']['tmp_name'];
echo $tipo;

$nombre2 = $HTTP_POST_FILES['word2']['name'];
$tipo2= $HTTP_POST_FILES['word2']['type'];
$tamano2=$HTTP_POST_FILES['word2']['size'];
$nombre_temp2=$HTTP_POST_FILES['word2']['tmp_name'];

$nombre3 = $HTTP_POST_FILES['word3']['name'];
$tipo3= $HTTP_POST_FILES['word3']['type'];
$tamano3=$HTTP_POST_FILES['word3']['size'];
$nombre_temp3=$HTTP_POST_FILES['word3']['tmp_name'];

$nombre4 = $HTTP_POST_FILES['word4']['name'];
$tipo4= $HTTP_POST_FILES['word4']['type'];
$tamano4=$HTTP_POST_FILES['word4']['size'];
$nombre_temp4=$HTTP_POST_FILES['word4']['tmp_name'];


if($tipo=="application/msword"){move_uploaded_file ($nombre_temp,"word/$nombre"); 
fwrite($abrir,"<a href='word/$nombre'><h1>$nombre</h1></a> ");}
if($tipo=="application/octet-stream"){move_uploaded_file ($nombre_temp,"word/$nombre"); 
fwrite($abrir,"<a href='word/$nombre'><h1>$nombre</h1></a> ");}

if($tipo2=="application/msword"){move_uploaded_file ($nombre_temp2,"word/$nombre2"); 
fwrite($abrir,"<a href='word/$nombre2'><h1>$nombre2</h1></a> ");}
if($tipo2=="application/octet-stream"){move_uploaded_file ($nombre_temp2,"word/$nombre2"); 
fwrite($abrir,"<a href='word/$nombre2'><h1>$nombre2</h1></a> ");}

if($tipo3=="application/msword"){move_uploaded_file ($nombre_temp3,"word/$nombre3"); 
fwrite($abrir,"<a href='word/$nombre3'><h1>$nombre3</h1></a> ");}
if($tipo3=="application/octet-stream"){move_uploaded_file ($nombre_temp3,"word/$nombre3"); 
fwrite($abrir,"<a href='word/$nombre3'><h1>$nombre3</h1></a> ");}

if($tipo4=="application/msword"){move_uploaded_file ($nombre_temp4,"word/$nombre4"); 
fwrite($abrir,"<a href='word/$nombre4'><h1>$nombre4</h1></a> ");}
if($tipo4=="application/octet-stream"){move_uploaded_file ($nombre_temp4,"word/$nombre4"); 
fwrite($abrir,"<a href='word/$nombre4'><h1>$nombre4</h1></a> ");}


?>


