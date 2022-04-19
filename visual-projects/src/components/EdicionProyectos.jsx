import React,{Fragment,useState} from "react"
import NavBar from "./Navbar/NavBar"
import { useDispatch, useSelector } from "react-redux";
import { FaUserTie } from "react-icons/fa"
import {
    openModalAsignarLider,
    closeNavbar,

    consutarProductos,
} from "../actions/events";
import axios from 'axios'
import Swal from "sweetalert2"
import "../assets/css/Edicion.css"
import { ModalAsignarLider } from "./Modal/ModalAsignarLider";
import { AiOutlineMail } from "react-icons/ai"
import { BsTelephoneMinus } from "react-icons/bs"
import CardProductos from "./Card/CardProductos";
import {CardTipoProyecto} from "../components/Card/CardTipoProyecto"
import { CardPlaneacion } from "./Card/CardPlaneacion";
import { CardMetas } from "./Card/CardMetas";
import { CardCronograma } from "./Card/CardCronograma";
export const EdicionProyectos =()=>{
    const dispatch = useDispatch();
    const { nombreProyecto,idLider,objProyectos}  = useSelector((state) => state);
   // !nombreProyecto?( <Route to="/MenuLider"/>):( <Route to="/EdicionProyectos"/>)
   //console.log(objProyectos)
    const [proyectoLider, setProyectoLider] = useState([]);
   dispatch(consutarProductos(objProyectos?.idProyecto))

  
    
    
    function handleAsignarLider(){
        dispatch(closeNavbar());
        dispatch(openModalAsignarLider());
            
    }
    
    return(
        <Fragment>
                <NavBar/>

                <div className="row">
                     <div className='col-xs-12 col-sm-12  col-md-12 col-lg-9'>
                          <div className="container">
                            <div className="row">
                                    <div className='col-xs-12 col-sm-12  col-md-12 col-lg-3'>
                                    <h4 style={{color:'black'}}>Nombre del Proyecto:</h4>
                                    
                                </div>
                                <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6'>
                                <h4 style={{color:'#757579'}}>{nombreProyecto}</h4>
                                </div>
                            </div>
                            <div className="row" style={{zIndex:1}}>
                                <CardTipoProyecto/>     
                           </div> 

                         <div className="row" style={{marginTop:'1rem',zIndex:-1}}>
                               <CardPlaneacion/> 
                         </div> 
                         
                         <div className="row" style={{marginTop:'1rem'}}>
                          <CardMetas/>
                         </div> 

                         <div className="row" style={{marginTop:'1rem'}}>
                           <CardProductos/>
                         </div> 
                               
                        </div>

                    </div>
                    <div className='col-xs-12 col-sm-12  col-md-12 col-lg-3'>
                        <div className="row">
                           
                        {
                            idLider ? (
                                <div className='col-xs-12 col-sm-12  col-md-12 col-lg-12'>      
                                <div className="card"
                                type="button" class="btn " 
                                style={{marginTop:'3rem',background:'rgb(63, 62, 62)', color:'white'}}
                                >
                                    <div className="card-body" style={{background:'rgb(63, 62, 62)', color:'white'}}>
                                        <FaUserTie/>
                                        <h8> 
                                        {objProyectos&&objProyectos[0].nombres}{objProyectos&&objProyectos[0].apellidos}
                                        </h8>
                                        <br/>
                                        <AiOutlineMail/>
                                        <h8>  
                                        {objProyectos&&objProyectos[0].correo}
                                        </h8>
                                        <br/>
                                        <BsTelephoneMinus/>
                                        <h8>  
                                        {objProyectos&&objProyectos[0].telefono}
                                        </h8>
                                       
                                    </div>
                           
                                </div>
                                </div>
                            ):(
                                <div className='col-xs-12 col-sm-12  col-md-12 col-lg-2'>      
                                <button className="botonBuscar"
                                type="button" class="btn " 
                                style={{marginTop:'3rem',background:'rgb(63, 62, 62)', color:'white'}}
                                onClick={handleAsignarLider}
        
                                >
                                  <FaUserTie/>
                               Asignar el Lider del proyecto.
                                </button>
                                </div>
                            )
                        }
                        </div>
                            <div className="row" style={{marginLeft:'-10rem',marginTop:'2rem', width:'30rem', height:'27rem'}}>
                            <CardCronograma  />
                            </div>
                                 
                                
                               
                           
                            </div>
                       
                        
                         
                      
                      
                        
                </div>
              
             <ModalAsignarLider/>
        </Fragment>
        
        
    )

}