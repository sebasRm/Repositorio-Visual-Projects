
import React from "react";
import { Modal, ModalHeader, FormGroup } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    closeModalRegistrarDirector,
    actualizarVistaLideres,
    actualizar,  
} from "../../actions/events";
import { useState } from "react";
import axios from 'axios'
import Swal from "sweetalert2"

 export const ModalRegistrarDirector = () =>{
    const dispatch = useDispatch();
    const { modalRegistrar, modalActualizar}  = useSelector((state) => state);
    const initiEvent = {
        identificacion: "",
        nombres:"",
        apellidos:"",
        telefono:"",
        contrasena:"",
        correo:"",
      };
    
    const [formValues, setformValues] = useState(initiEvent);
    const { identificacion, nombres, apellidos, telefono, contrasena, correo } = formValues;

    const validarUsuario = async(correo)=>{
        try
        {
            var formData = new FormData();
            formData.append('correo',correo);
            const res =await axios.post('http://localhost/Apis/validar_usuario.php',formData).then((resJson)=>{
                return resJson.data;    
            }); 
            
            if(res.datos.length>0){
               alert("usuario ya existe")
            }
            else{
                registrarUsuario(identificacion, nombres, apellidos, telefono, contrasena, correo );    
            }
            console.log(res.datos);
            return res;   
         
        }
        catch(error)
        {
            console.error(error);
        }     
    }

    const registrarUsuario =async(identificacion, nombres, apellidos, telefono, contrasena, correo)=>
    {
        try
        {
            var formData = new FormData();
            formData.append('identificacion', identificacion);
            console.log(identificacion)
            formData.append('nombres',nombres);
            formData.append('apellidos',apellidos);
            formData.append('telefono',telefono);
            formData.append('contrasena',contrasena);
            formData.append('correo',correo);
            axios.post('http://localhost/Apis/usuario.php',formData);
            console.log(formData.values);
            Swal.fire(
                "Listo",
                "Se ha Registrado con exito el lider ",
                "success"
              );  
        }
        catch(error)
        {
            console.error(error);
        }     
        dispatch(closeModalRegistrarDirector());
   
     
    }
     
   

    const handleInputChange = ({ target }) => {
        setformValues({
          ...formValues,
          [target.name]: target.value,
        });
      };
     

    const handleClose =()=>{
        dispatch(closeModalRegistrarDirector());
    }
    const handleAceptar =()=>{
        if(identificacion=="" ||  nombres =="" ||  apellidos=="" ||  telefono =="" || contrasena=="" ||  correo =="")
        {
                alert("Por favor ingrese los campos correctamente")
                dispatch(actualizarVistaLideres(true))
        }
        else{

            validarUsuario(correo);
            dispatch(actualizar(true))
        }

    }
  
    return(
        <Modal isOpen={modalRegistrar}>
                <ModalHeader>
                    Registrar un nuevo Lider
                </ModalHeader>
                <FormGroup>
                <div className="container ">

                    <div className="row">
                     <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center">
                       <p>
                           Identificación:
                       </p>
                        </div>
                        <div className="col-xs-12 col-sm-12  col-md-12 col-lg-7 ">
                        <div className="input-group mb-3 input-modal">
                                    <input
                                        name="identificacion"
                                        value={identificacion}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="form-control"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        placeholder="Identificación"
                                    />
                                    </div>
                        </div>
                    </div>

                    <div className="row">
                     <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center">
                       <p>
                           Nombres:
                       </p>
                        </div>
                        <div className="col-xs-12 col-sm-12  col-md-12 col-lg-7 ">
                        <input
                            name="nombres"
                            value={nombres}
                            onChange={handleInputChange}
                            type="text"
                            className="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            placeholder="Nombres"
                        />
                        </div>
                    </div>

                    <div className="row">
                     <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center">
                       <p>
                           Apellidos:
                       </p>
                        </div>
                        <div className="col-xs-12 col-sm-12  col-md-12 col-lg-7 ">
                        <input
                            name="apellidos"
                            value={apellidos}
                            onChange={handleInputChange}
                            type="text"
                            className="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            placeholder="Apellidos"
                        />
                        </div>
                    </div>

                    <div className="row">
                     <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center">
                       <p>
                           Telefono:
                       </p>
                        </div>
                        <div className="col-xs-12 col-sm-12  col-md-12 col-lg-7 ">
                        <input
                            name="telefono"
                            value={telefono}
                            onChange={handleInputChange}
                            type="text"
                            className="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            placeholder="Telefono"
                        />
                        </div>
                    </div>




                    <div className="row">
                     <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center">
                       <p>
                           Contraseña:
                       </p>
                        </div>
                        <div className="col-xs-12 col-sm-12  col-md-12 col-lg-7 ">
                        <input
                            name="contrasena"
                            value={contrasena}
                            onChange={handleInputChange}
                            type="password"
                            className="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            placeholder="Contraseña"
                        />
                        </div>
                    </div>

                    <div className="row">
                     <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center">
                       <p>
                           Correo:
                       </p>
                        </div>
                        <div className="col-xs-12 col-sm-12  col-md-12 col-lg-7 ">
                        <input
                            name="correo"
                            value={correo}
                            onChange={handleInputChange}
                            type="text"
                            className="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            placeholder="Correo"
                        />
                        </div>
                    </div>
                </div> 
                </FormGroup>
                <div className="d-flex justify-content-center">
                <button className="btn" onClick={handleAceptar}>
                    Aceptar
                </button>
                <button className="btn " onClick={handleClose}>
                    Cerrar
                </button>
                </div>


       </Modal>
    )
    
 }