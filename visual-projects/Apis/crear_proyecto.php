<?php
 include 'conexion.php';
 require_once('cors.php');


 $datos = json_decode(file_get_contents('php://input'), true);

    $json=[];
   
        
        $nombres = $_POST['nombres'];
        $sentencia=$conexion->prepare("call visualdb.crear_proyecto(?);");
        $sentencia->bind_param('s',$nombres);
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