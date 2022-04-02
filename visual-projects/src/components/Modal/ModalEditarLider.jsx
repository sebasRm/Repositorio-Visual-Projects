
import React from "react";
import { Modal, ModalHeader, FormGroup } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    closeModalEditarLider,
    actualizarVistaLideres,
    actualizar,  
} from "../../actions/events";
import { useState } from "react";
import axios from 'axios'


 export const ModalEditarLider = () =>{
    const dispatch = useDispatch();
    const { modalEditarLider, lideres}  = useSelector((state) => state);
    const initiEvent = {
        identificacion: "",
        nombres:"",
        apellidos:"",
        telefono:"",
        contrasena:"",
        correo:"",
      };
 //  console.log(lideres.idUsuarios)
    const [formValues, setformValues] = useState(initiEvent);
    const { identificacion, nombres, apellidos, telefono, correo } = formValues;
      //console.log(correo)
    const editarUsuario = async()=>{
        try
        {
            var formData = new FormData();
            formData.append('idUsuarios',lideres.idUsuarios);
            formData.append('identificacion',identificacion);
            formData.append('nombres',nombres);
            formData.append('apellidos',apellidos);
            formData.append('telefono',telefono);
            formData.append('correo',correo);
            const res =await axios.post('http://localhost/Apis/editar_lider.php',formData);
            console.log(res.data);
            return res;   
         
        }
        catch(error)
        {
            console.error(error);
        }     
    }

    const handleInputChange = ({ target }) => {
        setformValues({
          ...formValues,
          [target.name]: target.value,
        });
      };
     

    const handleClose =()=>{
        dispatch(closeModalEditarLider());
    }
    const handleAceptar =()=>{
    
            editarUsuario();
            dispatch(actualizar(true))
            dispatch(closeModalEditarLider());
        

    }
  
    return(
        <Modal isOpen={modalEditarLider}>
                <ModalHeader>
                    Editar Lider de proyecto
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
                                        placeholder={lideres.identificacion}
                                        
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
                            placeholder={lideres.nombres}
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
                            placeholder={lideres.apellidos}
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
                            placeholder={lideres.telefono}
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
                            placeholder={lideres.correo}
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