
import React from "react";
import { Modal, ModalHeader, FormGroup } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
    registrarProductos,
    registrarMeta,
    consultarProductos
} from "../../actions/events";
import { useState } from "react";
import axios from 'axios'
import Swal from "sweetalert2"
import { GiStairsGoal } from "react-icons/gi"
import { GiBlackFlag } from "react-icons/gi"
import { MdDescription } from "react-icons/md"
import { FaBox } from "react-icons/fa"
import { FaEdit } from "react-icons/fa"
import Carousel from "react-elastic-carousel";

 export const ModalCrearMeta = ({modalCrear, setModalCrear}) =>{
    const dispatch = useDispatch();
    const { objProyectos,producto}  = useSelector((state) => state);
       console.log(producto)
    //
    function handleCerrar()
    {
        setModalCrear(false)
    }

    const breakpoint = [
        {width:1,itemsToShow:3},
        {width:550,itemsToShow:3},
        {width:768,itemsToShow:3},
        {width:1200,itemsToShow:6},
        
      ]
    const initiEvent = {
        nombreMeta: "",
        DescripcionMeta:"",
        nombreProducto:"",
     
      };
    
    const [formValues, setformValues] = useState(initiEvent);
    const { nombreMeta,DescripcionMeta,nombreProducto } = formValues;
    
    const handleInputChange = ({ target }) => {
      setformValues({
        ...formValues,
        [target.name]: target.value,
      });
    };

    function handleEditarProduto()
    {
        dispatch(registrarProductos(nombreProducto,objProyectos[0].idProyecto,objProyectos[0].idPlaneacion))
        
    }

    return(
        <Modal isOpen={modalCrear}>
                <ModalHeader className="justify-content-center">
                    Añadir Metas <GiStairsGoal size={25}/>
                </ModalHeader>
                <FormGroup>
                <div className="container ">

                    <div className="row">
                     <div className="col-xs-12 col-sm-12  col-md-12 col-lg-3 text-center">
                       <p>
                      < GiBlackFlag size={30}/>
                       </p>
                        </div>
                        <div className="col-xs-12 col-sm-12  col-md-12 col-lg-8 ">
                        <div className="input-group mb-3 input-modal">
                                    <input
                                        name="nombreMeta"
                                        value={nombreMeta}
                                        onChange={handleInputChange}
                                        type="text"
                                        className="form-control"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        placeholder="Nombre de la meta"
                                    />
                                    </div>
                        </div>
                    </div>

                    <div className="row">
                     <div className="col-xs-12 col-sm-12  col-md-12 col-lg-3 text-center">
                       <p>
                       <MdDescription size={30}/>
                       </p>
                        </div>
                        <div className="col-xs-12 col-sm-12  col-md-12 col-lg-8 ">
                        <input
                            name="DescripcionMeta"
                            value={DescripcionMeta}
                            onChange={handleInputChange}
                            type="text"
                            className="form-control"
                            aria-label="Username"
                            aria-describedby="basic-addon1"
                            placeholder="Describe tu meta"
                        />
                        </div>
                    </div>
                    {
                        !nombreMeta=="" & !DescripcionMeta=="" ? 
                        <div className="text-center">
                        <button 
                        style={{
                          background:'transparent'
                        ,border:0,
                        }}
                        onClick={()=>dispatch(registrarMeta(nombreMeta,DescripcionMeta,objProyectos[0].idPlaneacion))}
                       >
                      <FaEdit size={28}/> </button>
                        </div>     
                        :""
                    }
                    {
                        objProyectos&& objProyectos[0].idMetas &&  
                        <div className="row justify-content-center">
                        <div className="col-xs-12 col-sm-12  col-md-12 col-lg-7 text-center">
                           <div className="card">
                               <div className="card-head text-center"> <h8 style={{color:'white'}}>Productos</h8> </div>
                               <div className="card-body">
                               <div className="row">
                                       <div className="col-xs-12 col-sm-12  col-md-12 col-lg-1 text-center">
                                       <p>
                                       < FaBox size={20}/>
                                       </p>
                                           </div>
                                           <div className="col-xs-12 col-sm-12  col-md-12 col-lg-10 ">
                                           <div className="input-group mb-3 input-modal">
                                                       <input
                                                           name="nombreProducto"
                                                           value={nombreProducto}
                                                           onChange={handleInputChange}
                                                           type="text"
                                                           className="form-control"
                                                           aria-label="Username"
                                                           aria-describedby="basic-addon1"
                                                           placeholder="producto"
                                                       />
                                                       </div>
                                           </div>
                                       </div>
                                       {
                                           !producto=="" ? 
                                           <button 
                                           style={{
                                             background:'transparent'
                                           ,border:0,
                                           }}
                                           onClick={handleEditarProduto}
                                          >
                                         <FaEdit size={28}/> </button>:""
                                       }

                               </div>
                           </div>
                       </div>
                        
                       <div className="col-xs-12 col-sm-12  col-md-12 col-lg-12 text-center">
                       <Carousel 
                            breakPoints={breakpoint}
                            style={{marginTop:'5%'}}
                            
                            >
                                {
                                        producto &&
                                        (producto.map(producto =>(
                                                <div key={producto.idActividades}>{
                                                    
                                                }
                                                        <div className="card" style={{width:'6rem',height:'5rem'}} >
                                                            <div className="card-head" style={{color:'white'}}>
                                                                producto
                                                            </div>
                                                            <div className="card-body" style={{marginTop:'-1rem'}}>
                                                                {producto.nombre_producto}
                                                            </div>
                                                        </div>
                                                </div>
                                            )))  
                                }     
                  </Carousel>
                       </div>

                   </div>
                    }
                   
                
                </div> 
                </FormGroup>
                <div className="d-flex justify-content-center">
                <button className="btn " onClick={handleCerrar}>
                    Cerrar
                </button>
                </div>


       </Modal>
    )
    
 }