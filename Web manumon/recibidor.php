<?php 
$nombre = $HTTP_POST_FILES['archivo']['name'];
$tipo= $HTTP_POST_FILES['archivo']['type'];
$tamano=$HTTP_POST_FILES['archivo']['size'];
$nombre_temp=$HTTP_POST_FILES['archivo']['tmp_name'];
echo $nombre_temp;
move_uploaded_file ($nombre_temp,"musica/$nombre"); 
?>
<script>
window.location.href="izdo.html"
</script>