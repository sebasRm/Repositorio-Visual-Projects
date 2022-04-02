<?php
$hostname='localhost';
$username='root';
$password='';
$database='visualdb';

$conexion=new mysqli($hostname,$username,$password,$database);
if($conexion->connect_errno > 0){
    die('Unable to connect to database [' . $conexion->connect_error . ']');
}
?>
