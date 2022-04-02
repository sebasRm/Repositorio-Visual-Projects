<?php
 include 'conexion.php';
 require_once('cors.php');

    $json=[];
    $idUsuarios= $_POST['idUsuarios'];  
$identificacion= $_POST['identificacion'];
$nombres = $_POST['nombres'];
$apellidos= $_POST['apellidos'];
$telefono= $_POST['telefono'];
$correo= $_POST['correo'];


$sentencia=$conexion->prepare("call visualdb.editar_lider(?, ?, ?, ?, ?,?);");
$sentencia->bind_param('isssss',$idUsuarios,$identificacion,$nombres,$apellidos,$telefono,$correo);

$res=$sentencia->execute();
if($res)
{
    $resultado = $sentencia->get_result();
}
$err=mysqli_error($conexion);
$sentencia->close();
$conexion->close();
echo json_encode(array( 'respuesta' => $res,'error' =>$err));
exit();


?>