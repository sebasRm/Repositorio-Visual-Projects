<?php
 include 'conexion.php';
 require_once('cors.php');
 $datos = json_decode(file_get_contents('php://input'), true);

 if (isset($_POST['consultar_lideres']))
    {
        $json=[];
        $buscarProyecto=$_POST['consultar_lideres'];
        $sentencia=$conexion->prepare("call visualdb.consultar_lideres_proyectos();");
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
        echo json_encode(array( 'respuesta' => $res,'error' =>$err,'datos' => $json));
        exit();
    }

   


?>