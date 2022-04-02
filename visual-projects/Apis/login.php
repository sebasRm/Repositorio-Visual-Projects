<?php
    include 'conexion.php';
    require_once('cors.php');
    $datos = json_decode(file_get_contents('php://input'), true);

    
    if (isset($_POST['usuario']))
    {
        $json=[];
        $usuario=$_POST['usuario'];
        $contrasena=$_POST['contrasena'];
       
        $sentencia=$conexion->prepare("CALL visualdb.buscar_usuario(?, ?);");
        
        $sentencia->bind_param('ss',$usuario,$contrasena);
        $res=$sentencia->execute();
         
        $resultado = $sentencia->get_result();
        
        foreach($resultado as $row)
        {
            $json[] = $row;
           
        }
            echo json_encode(array( 'respuesta' => $res,'datos' => $json));
            
        $err=mysqli_error($conexion);
        $sentencia->close();
        $conexion->close();
        
        exit();
    }
?>