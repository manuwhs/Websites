<?php
@$destino="principal.html";
@$abrir = fopen ($destino,"a");
@$come = $_POST["mensaje"];
@$nom =  $_POST["nombre"];
@$mens =  $_POST["msn"];
@$we =  $_POST["web"];
@$hor =  $_POST["horita"];
@$texto= "<table border=3 width=700 height=* bordercolor=ffffff bgcolor=000000 cellpadding =10 cellspacing=1>
<tr><td valign = top><font color=cornsilk size=4>$come</font></td><td width=250>
$hor<br>
<font color=cornsilk size=4>$nom <br>
<a href=$we>$we</a> <br>
<a href=mailto:$mens>$mens</a></font></tr></td></table><br>";
if (!$come==""){if (!nom==""){fwrite($abrir,$texto);}}
?>
<script>
window.location.href="principal.html"
</script>