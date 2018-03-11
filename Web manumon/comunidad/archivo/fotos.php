<?php
$destino="fotos32167.html";
$abrir = fopen ($destino,"a");
include("resize.php");

$nombre = $HTTP_POST_FILES['foto']['name'];
$tipo= $HTTP_POST_FILES['foto']['type'];
$tamano=$HTTP_POST_FILES['foto']['size'];
$nombre_temp=$HTTP_POST_FILES['foto']['tmp_name'];
move_uploaded_file ($nombre_temp,"fotos/$nombre"); 


$nombre2 = $HTTP_POST_FILES['foto2']['name'];
$tipo2= $HTTP_POST_FILES['foto2']['type'];
$tamano2=$HTTP_POST_FILES['foto2']['size'];
$nombre_temp2=$HTTP_POST_FILES['foto2']['tmp_name'];
move_uploaded_file ($nombre_temp2,"fotos/$nombre2"); 

$nombre3 = $HTTP_POST_FILES['foto3']['name'];
$tipo3= $HTTP_POST_FILES['foto3']['type'];
$tamano3=$HTTP_POST_FILES['foto3']['size'];
$nombre_temp3=$HTTP_POST_FILES['foto3']['tmp_name'];
move_uploaded_file ($nombre_temp3,"fotos/$nombre3"); 

$nombre4 = $HTTP_POST_FILES['foto4']['name'];
$tipo4= $HTTP_POST_FILES['foto4']['type'];
$tamano4=$HTTP_POST_FILES['foto4']['size'];
$nombre_temp4=$HTTP_POST_FILES['foto4']['tmp_name'];
move_uploaded_file ($nombre_temp4,"fotos/$nombre4"); 

$nombre5 = $HTTP_POST_FILES['foto5']['name'];
$tipo5= $HTTP_POST_FILES['foto5']['type'];
$tamano5=$HTTP_POST_FILES['foto5']['size'];
$nombre_temp5=$HTTP_POST_FILES['foto5']['tmp_name'];
move_uploaded_file ($nombre_temp5,"fotos/$nombre5"); 

$nombre6 = $HTTP_POST_FILES['foto6']['name'];
$tipo6= $HTTP_POST_FILES['foto6']['type'];
$tamano6=$HTTP_POST_FILES['foto6']['size'];
$nombre_temp6=$HTTP_POST_FILES['foto6']['tmp_name'];
move_uploaded_file ($nombre_temp6,"fotos/$nombre6"); 

$nombre7 = $HTTP_POST_FILES['foto7']['name'];
$tipo7= $HTTP_POST_FILES['foto7']['type'];
$tamano7=$HTTP_POST_FILES['foto7']['size'];
$nombre_temp7=$HTTP_POST_FILES['foto7']['tmp_name'];
move_uploaded_file ($nombre_temp7,"fotos/$nombre7"); 

$nombre8 = $HTTP_POST_FILES['foto8']['name'];
$tipo8= $HTTP_POST_FILES['foto8']['type'];
$tamano8=$HTTP_POST_FILES['foto8']['size'];
$nombre_temp8=$HTTP_POST_FILES['foto8']['tmp_name'];
move_uploaded_file ($nombre_temp8,"fotos/$nombre8"); 
echo $tipo;

if($tipo=="image/pjpeg"){
fwrite($abrir,"<a href='fotos/$nombre'><img src='fotosp/$nombre' border='0' vspace=10 hspace=10></a>");
$thumb=new thumbnail("fotos/$nombre");
$thumb->size_height(100);
$thumb->jpeg_quality(80);
$thumb->save("fotosp/$nombre");}

if($tipo2=="image/pjpeg"){
fwrite($abrir,"<a href='fotos/$nombre2'><img src='fotosp/$nombre2' border='0' vspace=10 hspace=10></a>");
$thumb=new thumbnail("fotos/$nombre2");
$thumb->size_height(100);
$thumb->jpeg_quality(80);
$thumb->save("fotosp/$nombre2");}

if($tipo3=="image/pjpeg"){
fwrite($abrir,"<a href='fotos/$nombre3'><img src='fotosp/$nombre3' border='0' vspace=10 hspace=10></a>");

$thumb=new thumbnail("fotos/$nombre3");
$thumb->size_height(100);
$thumb->jpeg_quality(80);
$thumb->save("fotosp/$nombre3");}

if($tipo4=="image/pjpeg"){
fwrite($abrir,"<a href='fotos/$nombre4'><img src='fotosp/$nombre4' border='0' vspace=10 hspace=10></a>");

$thumb=new thumbnail("fotos/$nombre4");
$thumb->size_height(100);
$thumb->jpeg_quality(80);
$thumb->save("fotosp/$nombre4");}

if($tipo5=="image/pjpeg"){
fwrite($abrir,"<a href='fotos/$nombre5'><img src='fotosp/$nombre5' border='0' vspace=10 hspace=10></a>");

$thumb=new thumbnail("fotos/$nombre5");
$thumb->size_height(100);
$thumb->jpeg_quality(80);
$thumb->save("fotosp/$nombre5");}

if($tipo6=="image/pjpeg"){
fwrite($abrir,"<a href='fotos/$nombre6'><img src='fotosp/$nombre6' border='0' vspace=10 hspace=10></a>");

$thumb=new thumbnail("fotos/$nombre6");
$thumb->size_height(100);
$thumb->jpeg_quality(80);
$thumb->save("fotosp/$nombre6");}

if($tipo7=="image/pjpeg"){
fwrite($abrir,"<a href='fotos/$nombre7'><img src='fotosp/$nombre7' border='0' vspace=10 hspace=10></a>");

$thumb=new thumbnail("fotos/$nombre7");
$thumb->size_height(100);
$thumb->jpeg_quality(80);
$thumb->save("fotosp/$nombre7");}

if($tipo8=="image/pjpeg"){
fwrite($abrir,"<a href='fotos/$nombre8'><img src='fotosp/$nombre8' border='0' vspace=10 hspace=10></a>");

$thumb=new thumbnail("fotos/$nombre8");
$thumb->size_height(100);
$thumb->jpeg_quality(80);
$thumb->save("fotosp/$nombre8");}

?>


