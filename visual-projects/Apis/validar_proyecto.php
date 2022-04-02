<?php
 include 'conexion.php';
 require_once('cors.php');


 $datos = json_decode(file_get_contents('php://input'), true);

    $json=[];
  
        $nombre_proyecto= $_POST['nombre_proyecto'];
        
    
        $sentencia=$conexion->prepare("call visualdb.validar_proyecto(?);");
        $sentencia->bind_param('s',$nombre_proyecto);
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