<?php
 include 'conexion.php';
 require_once('cors.php');

    $json=[];
$idUsuarios= $_POST['idUsuarios'];  
$sentencia=$conexion->prepare("call visualdb.eliminar_lider(?);");
$sentencia->bind_param('i',$idUsuarios);

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