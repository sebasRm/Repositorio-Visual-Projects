<?php
 include 'conexion.php';
 require_once('cors.php');


 $datos = json_decode(file_get_contents('php://input'), true);

    $json=[];
   
        $identificacion= $_POST['identificacion'];
        $nombres = $_POST['nombres'];
        $apellidos= $_POST['apellidos'];
        $telefono= $_POST['telefono'];
        $contrasena= $_POST['contrasena'];
        $correo= $_POST['correo'];
    
        $sentencia=$conexion->prepare("call visualdb.registrar_lider_proyecto(?, ?, ?,?, ?, ?)");
        $sentencia->bind_param('ssssss',$identificacion,$nombres,$apellidos,$telefono,$contrasena,$correo);
        $res=$sentencia->execute();
        if($res)
        {
            $resultado = $sentencia->get_result();
            foreach($resultado as $row)
            {
                $json[] = $row;
            }
        }
        $err=mysqli_error($conexion);
        $sentencia->close();
        $conexion->close();
        echo json_encode(array( 'respuesta' =>$res,'error' =>$err ,'datos' => $json));
        exit();

   


 


?>