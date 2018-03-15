<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');



if(!isset($_POST)) die();

session_start();
$response = [];

require_once ("db-init/db-init.php");

$username = $_POST['username'];
$password1 = $_POST['password1'];
$password2 = $_POST['password2'];





if (!$connection) {
    die("Connection failed: " . mysqli_connect_error());
    $response['status'] ='Conn error';
}

    try{
        
        $hash = password_hash($password1,PASSWORD_BCRYPT,array('cost' =>12));
        
        $query = "INSERT INTO users(name,password) VALUES('$username','$hash')";   
        
        if($pdo->query($query))
        {
            $response['status'] ='User added';
           
        }
        else{
            $response['status'] ='Something went wrong';
        }
    }

catch(PDOException $e)
    {
    //echo "<br>" . $e->getMessage();
    $respose['status'] = 'User name taken';
     
	if($e =! null)
	{     
		//echo "Error was Catched";
        //$respose['status'] = 'User name taken';
    }
	
	
    }
finally{
    $connection= null;
    echo json_encode($response); 
}
    
	
	
?>