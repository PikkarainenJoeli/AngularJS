<?php
try{
require_once ("/home/H8897/db-init/db-init.php");
$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


	
$sql = "CREATE TABLE opintojaksot 
(
  ID int NOT NULL AUTO_INCREMENT,
  kayttaja varchar (20)not null,
  tunnus varchar(10) not null,
  nimi varchar(128) not null,
  seminaari date,
  tentti date,
  vaihe varchar(20),
  muistio varchar(500),
  PRIMARY KEY (ID)
)";
$db->exec($sql);

}
catch(PDOException $e)
    {
    echo $sql . "<br>" . $e->getMessage();
    }
$db= null;	

?>