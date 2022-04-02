<?php
 include 'conexion.php';
 require_once('cors.php');


 $datos = json_decode(file_get_contents('php://input'), true);

    $json=[];
  
        $correo= $_POST['correo'];
        
    
        $sentencia=$conexion->prepare("call visualdb.filtrar_lider(?);");
        $sentencia->bind_param('s',$correo);
        $res=$sentencia->execute();
        $resultado = $sentencia->get_result();
        if($res)
        {
            
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