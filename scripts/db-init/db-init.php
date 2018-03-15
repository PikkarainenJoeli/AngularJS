<?php
// db-init.php

$dbname = 'test';
$dbuser = 'newuser';
$dbpass = 'password';
$dbhost = 'localhost';


$connection = mysqli_connect($dbhost, $dbuser, $dbpass) or die("Unable to Connect to '$dbhost'");

$opt = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_EMULATE_PREPARES => false,
];
$dsn = "mysql:host=$dbhost;dbname=$dbname";

$pdo = new PDO($dsn, $dbuser, $dbpass, $opt);

$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
?>