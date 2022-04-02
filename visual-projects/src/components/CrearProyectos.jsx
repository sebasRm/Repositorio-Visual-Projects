import React,{useState} from "react"
import { Fragment } from "react/cjs/react.production.min"
import NavBar from "./Navbar/NavBar"
import axios from 'axios'
import creaProyecto from "../assets/img/creaProyecto.png"
import Swal from "sweetalert2"
import { useDispatch, useSelector } from "react-redux";

import {
    gestorProyecto,
} from "../actions/events";

export const CrearProyectos=() =>{
    const dispatch = useDispatch();
    const initiEvent = {
        nombreProyecto:"",
      };

    const [formValues, setformValues] = useState(initiEvent);
    
    const { nombreProyecto } = formValues;

    const handleInputChange = ({ target }) => {
        setformValues({
          ...formValues,
          [target.name]: target.value,
        });
      };

      //console.log(nombreProyecto)

      const handleValidarProyecto  =async()=>
      {
          dispatch(gestorProyecto(nombreProyecto ))
          if(nombreProyecto)
          {
            try
            {
                var formData = new FormData();
                formData.append('nombre_proyecto',nombreProyecto);
                const res= await axios.post('http://localhost/Apis/validar_proyecto.php',formData).then((resJson)=>{
                    return resJson.data;    
                }); 
                console.log(res)
                if(res.datos.length>0){
                  
                    Swal.fire(
                        "Error",
                        "ya existe un proyecto con ese nombre.",
                        "error"
                      );
                 }
                 else{
                    handleCrearProyecto()   
                 }
              
            }
            catch(error)
            {
                console.error(error);
            }     
          }
          else
          {
             
              Swal.fire(
                "Error",
                "Por favor digite el nombre del proyecto.",
                "error"
              );
          }
      }

      const handleCrearProyecto =async()=>
      {
          console.log(nombreProyecto)
          dispatch(gestorProyecto(nombreProyecto ))
          if(nombreProyecto)
          {
            try
            {
                var formData = new FormData();
                formData.append('nombres',nombreProyecto);
                axios.post('http://localhost/Apis/crear_proyecto.php',formData);
                console.log(formData.values);

                Swal.fire(
                    "Listo",
                    "Se ha registrado exitosamente el proyecto",
                    "success"
                  );
                
                  window.location.href="/EdicionProyectos";
                
            }
            catch(error)
            {
                console.error(error);
            }     
          }
          else
          {
              alert("Por favor digite el nombre del proyecto.")
          }
        
      }
       
    
    return (
        <Fragment>
            <NavBar/>
            <div className="container">
            <div className="row">
                <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6'style={{marginTop:'5rem'}}>
                <h1 style={{color:'#757579'}}>¡Crear un nuevo Proyecto!</h1>
                <div className="container" style={{padding:0, marginLeft:'auto', marginRight:'auto', width: '35em', textAlign:'left'}}>
                <h8 style={{color:'#757579'}}>
                 Aqui pordras crear un nuevo proyecto, empezando por registrar el nombre del proyecto. </h8>
                </div>
                <input
                            name="nombreProyecto"
                            value={nombreProyecto}
                            onChange={handleInputChange}
                            type="text"
                            className="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            placeholder="Nombre proyecto"
                            style={{marginTop:'3rem', width:'25rem'}}
                        />         
                <button className="btn" style={{background:'#163bdd', color:'white', marginTop:'2rem'}}
                onClick={handleValidarProyecto}>
                 Aceptar
                </button>

                </div>

                <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6' style={{marginTop:'4rem'}}>
                <img src={creaProyecto} className="img-direccionProyectos img-fluid" />
                </div>

           
            </div>
            </div>
        </Fragment>
       
    )
    
}

