<?php
/*
This file contains database configuration assuming you are running mysql using user "root" and password ""
*/

define('DB_SERVER', '185.224.138.154');
define('DB_USERNAME', 'u590462596_senjuti');
define('DB_PASSWORD', 'Senjuti@2000');
define('DB_NAME', 'u590462596_senjuti');

// Try connecting to the Database
$conn = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);

//Check the connection
if($conn == false){
    dir('Error: Cannot connect');
}

?>
