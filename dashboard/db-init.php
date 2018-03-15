<?php
// db-init.php
$db = new PDO('mysql:host=localhost;dbname=testdb;charset=utf8',
              'root', 'B4X3uRpv8');
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

$db->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
?>