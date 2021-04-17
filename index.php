<?php 
$dt = new \DateTime();
$fp = fopen("networklog.txt", 'a');
fwrite($fp, "{$dt->format('Y-m-d H:i:s')};{$_POST['s']}\n");
fclose($fp);
