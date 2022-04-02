<?php
 include 'conexion.php';
 require_once('cors.php');
 $datos = json_decode(file_get_contents('php://input'), true);

 if (isset($_POST['buscarProyectoTodos']))
    {
        $json=[];
        $buscarProyecto=$_POST['buscarProyectoTodos'];
        $sentencia=$conexion->prepare("call visualdb.buscar_proyecto_general(?);");
        $sentencia->bind_param('s',$buscarProyecto);
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


    if (isset($_POST['consultasTipo']))
    {
        $json=[];
        $consultasTipo=$_POST['consultasTipo'];
        $sentencia=$conexion->prepare("call visualdb.consultar_facultades();");
    
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
    if (isset($_POST['consultasProgramas']))
    {
        $json=[];
        $consultasProgramas=$_POST['consultasProgramas'];
        $sentencia=$conexion->prepare("call visualdb.consultas_programas(?);");
        $sentencia->bind_param('s',$consultasProgramas);
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

    if (isset($_POST['consultarIndicadorCPI']))
    {
        $json=[];
        $consultarIndicadorCPI=$_POST['consultarIndicadorCPI'];
        $sentencia=$conexion->prepare("CALL visualdb.consultar_indicadores(?);");
        $sentencia->bind_param('s',$consultarIndicadorCPI);
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

    /*if(isset($_POST['agregaUser']))
    {
        $json=[];
        $identificacion= $datos['identificacion'];
        $nombres = $datos['nombres'];
        $apellidos= $datos['apellidos'];
        $telefono= $datos['telefono'];
        $contrasena= $datos['contrasena'];
        $correo= $datos['correo'];
        
   
        $sentencia=$conexion->prepare("call visualdb.registrar_director(?, ?, ?,?, ?, ?)");
        $sentencia->bind_param('ssssss',$identificacion,$nombres,$apellidos,$telefono,$contrasena,$correo);
        $res=$sentencia->execute();
        
       
        $err=mysqli_error($conexion);
        $sentencia->close();
        $conexion->close();
        echo json_encode(array( 'respuesta' =>$res,'error' =>$err));
        exit();
    
    }*/

  

?>