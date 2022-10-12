
import CardProyectos from '../Card/CardProyectos';
//import { useNavigate } from "react-router-dom";
//import { useNavigate } from 'react-router-dom';
import { Fragment } from "react";
import React, {useState,useEffect} from 'react'; 
import '../../assets/css/Menu.css';
import axios from 'axios'
import Navbar from '../Navbar/NavBar'
import {PanelBusquedaAvanzada } from '../PanelBusquedaAvanzada';
import Carousel from "react-elastic-carousel";
import Item from './Item';
import "../../assets/css/Menu.css"
import direccionProyectos from "../../assets/img/direccionProyectos.png";
import { FaUserTie } from "react-icons/fa"
import { MdCreateNewFolder } from "react-icons/md"
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";



import {
  consultarProyectos 
} from "../../actions/events";

export const MenuCoordinador =()=>{

  const { proyectos}  = useSelector((state) => state);
  const dispatch = useDispatch();

  !proyectos && dispatch(consultarProyectos());

 // const navigate = useNavigate();
    const breakpoint = [
      {width:1,itemsToShow:1},
      {width:550,itemsToShow:2},
      {width:768,itemsToShow:3},
      {width:1200,itemsToShow:6},
      
    ]

    const [idLiderProyecto, setIdLiderProyecto] = useState([])
    
    function handleCrearProyectos()
    {
      //navigate("/CrearProyectos")
      window.location.href="/CrearProyectos";
    }
    function handleDirectores(){
      window.location.href="/Lideres"; 
    }
    console.log(proyectos)




        // console.log(proyectos)
        let usuario =JSON.parse(sessionStorage.getItem('usuarioActivo'));
          console.log(usuario.nombres)
        return(  
             <Fragment>
       
              <Navbar/>
              

              <div className="container-fluid">
              <div className="row">
                <div className="col-xs-12 col-sm-12  col-md-12 col-lg-12">
                <PanelBusquedaAvanzada/>
                </div>
                <div className="row">
                <div className="col-xs-12 col-sm-12  col-md-12 col-lg-7">
                  <div className="row">
                  <div className="col-xs-12 col-sm-12  col-md-6 col-lg-3"></div>
                  
                <div className="col-xs-12 col-sm-12  col-md-6 col-lg-4"  style={{marginTop:'2rem'}}>
                       
                        <button className="botonBuscar"
                        type="button" class="btn " 
                        style={{marginTop:'0.5rem',background:'rgb(63, 62, 62)', color:'white'}}
                          onClick={handleDirectores}

                        >
                          <FaUserTie/>
                        Lideres de proyectos
                        </button>
                    
                        </div>

                        <div className="col-xs-12 col-sm-12  col-md-6 col-lg-4" style={{marginTop:'2rem'}}>
                        <button className="botonBuscar"
                        type="button" class="btn " 
                        style={{marginTop:'0.5rem',background:'rgb(63, 62, 62)', color:'white'}}
                         onClick={handleCrearProyectos}
                        >
                          <MdCreateNewFolder/>
                        Crear proyecto
                        </button>
                        </div>
                        </div>
                    </div>
                          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-3">
                          <h3 style={{color:'#757579',marginLeft:'1rem', marginTop:'1rem'}}>Bienvenido Coordinador:</h3>
                          </div>

                          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
                          <h3 style={{color:'#757579',marginTop:'1rem'}}>{usuario.nombres+" "}{usuario.apellidos}</h3>
                          </div>
                </div>

                <div className="row" style={{marginTop:'1rem'}}>
                </div>

                <div className="row" >
                <div className="col-xs-12 col-sm-12  col-md-12 col-lg-7 carrusel text-center"  >
                <h1 style={{color:'#757579'}}>¡Gestiona tus proyectos!</h1>
                <div className="container" style={{padding:0, marginLeft:'auto', marginRight:'auto', width: '35em', textAlign:'left'}}>
                <h8 style={{color:'#757579'}}>
                En esta sección podras visualizar tus proyectos que encuentres gestioniando actualmente ,
                podras filtrar y seleccionar los diferentes proyectos para obtener mas información y desplgar mas funcionalidades del software.</h8>
                </div>
               
                <Carousel 
                  breakPoints={breakpoint}
                  style={{marginTop:'5%'}}
                  
                  >
                     {
                             proyectos ?  
                             (proyectos.map(proyecto =>(
                                    <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4" key={proyecto.idActividades}>{
                                          console.log(proyecto)
                                    }
                                            <CardProyectos 
                                            title={proyecto.nombre_proyecto}
                                            pocentaje={proyecto.porcentaje_avance}
                                            presupuesto={proyecto.presupuesto}
                                            indicadorCPI={proyecto.indicador_cpi}
                                            indicadorSPI={proyecto.indicador_spi}
                                            idProyecto={proyecto.idProyecto}
                                            idLider={proyecto.idLider_proyecto}
                                            
                                            />
                                    </div>
                                ))):  (console.log("no hay proyectos"))  
                      }     
                  </Carousel>
                    
                </div>
                <div className="col-xs-12 col-sm-12  col-md-12 col-lg-5">
                <img src={direccionProyectos} className="img-direccionProyectos img-fluid" />
                </div>
             
              </div>
              </div>
              </div>
            
            
         </Fragment>
        ) 
    
}    
