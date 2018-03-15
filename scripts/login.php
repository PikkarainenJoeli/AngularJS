<?php
header('Access-Control-Allow-Origin: *');
header('Content-Type: application/json');




session_start();
$response = [];

require_once ("db-init/db-init.php");

$username = $_POST['username'];
$password = $_POST['password'];


$response['status'] = 'base value';
$response['user'] = 'base value';


//$hash = password_hash($password,PASSWORD_BCRYPT,array('cost' =>12));


mysqli_select_db($connection,$dbname) or die("Could not open the db '$dbname'");
if (mysqli_connect_error()) {
    $response['status'] ='Conn error';
    die("Database connection failed: " . mysqli_connect_error());
}



try{
    
    $query = "SELECT name,password 
    FROM users 
    WHERE name='$username'";
    
    $stmt = $pdo->prepare($query);
    $stmt->execute();
    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    $hash = $result['password'];
    


    
if ($stmt->rowCount() == 1 AND password_verify($password,$hash)) { 
        $response['status'] = 'loggedin';
        $response['user'] = $username;
        $response['userUniqueID'] = md5(uniqid());
        $_SESSION['userUniqueID'] = $response['userUniqueID'];
} else { 
    $response['status']='error';
} 
    

}
catch(PDOException $e)
    {
    echo "<br>" . $e->getMessage();
    $respose['status'] = 'User name taken';
     
	if($e =! null)
	{     
		echo "Error was Catched";
        $respose['status'] = 'User name taken';
    }	
    }
finally{
    echo json_encode($response);
}


?>