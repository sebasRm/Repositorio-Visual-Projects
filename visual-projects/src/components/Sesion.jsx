import React,{useRef, useState} from 'react';
import axios from 'axios'
import "../assets/css/Sesion.css"
import fondoLogin from "../assets/img/fondoLogin.jpg"
import LogoVisual from "../assets/img/logo.png"
import { Fragment } from 'react/cjs/react.production.min';

const validarUsuario = (usuario)=>
{
    
    if(usuario)
    {
        if(usuario.idLider_proyecto)
        {
            window.location.href="/MenuLider"; 
        }
        else if(usuario.idCoordinadora_gestion)
        {
            window.location.href="/MenuCoordinador";   
            
        }
        sessionStorage.setItem('usuarioActivo', JSON.stringify(usuario));
    }
    else{
        alert("no existe el usuario con ese correo");
    }
}


const enviarDatos = async(usuario,contrasena)=>
{
    var formData = new FormData();
    formData.append('usuario', usuario);
    formData.append('contrasena',contrasena);
    await axios.post
    (
        'http://localhost/Apis/login.php',
        formData
    ).then((resJson)=>
    {
        console.log(resJson);
        let usuario=resJson.data.datos[0];
        validarUsuario(usuario)
            
    }).catch((error)=>
    {
        console.error(error);
    });      
}


export const Sesion =()=>
{
    
    const reftUsuario = useRef(null);
    const reftPassword = useRef(null);

    const handleLogin= async()=>{

           let usuario = reftUsuario.current.value;
           let contrasena = reftPassword.current.value;

           if(usuario=="" || contrasena =="")
           {
            alert("Ingrese los campos correctamente")
           }
           else
           {
            enviarDatos(usuario,contrasena)
        }
    }

    return(
      <Fragment>
       <div className="">
            <img src={fondoLogin} className="fondoLogin"/>
       </div>

      <div className="container-fluid">
      <div className="row align-items-center justify-content-center center-block minh-100 ">
       <div className="col-xs-6 col-sm-6  col-md-6 col-lg-4 ">
     
            <div className="card text-white bg-secondary">
                <div className="card-header text-center ">
                     <img src={LogoVisual} className="logoVisual img-fluid mx-auto d-block"/>
                     <h2 className="card-title">Ingresar a Suite de dirección de proyectos</h2>  
                </div>

            <div className="card-body">
                <div className="input-group mb-3">
                   <div className="input-group-prepend">
                     <span className="input-group-text" id="basic-addon1">
                     ✉️</span>
                   </div>   
                <input
                 type="email"
                 className="form-control"
                 placeholder="Correo"
                 aria-label="Username"
                 aria-describedby="basic-addon1"
                 ref={reftUsuario} />
                </div>

                <div className="input-group mb-3">
                    <div className="input-group-prepend">
                    <span className="input-group-text" id="basic-addon2">
                        🔑</span>
                </div>
                
                <input 
                type="password" 
                className="form-control" 
                placeholder="Contraseña" 
                aria-label="Contraseña" 
                aria-describedby="basic-addon2" 
                ref={reftPassword}/>
                </div>

                <div className="text-center">
                <button onClick={handleLogin} 
                                className=" btn btn-lg btn-info btn-block">
                                    Acceder
                </button>
                </div>
                </div>
            </div>

            </div>
          
        </div>
     </div>
      </Fragment>     
    )
}