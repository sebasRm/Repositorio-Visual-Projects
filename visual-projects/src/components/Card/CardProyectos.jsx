import React, {Component} from 'react'; 


import {Link} from 'react-router-dom'
import "../../assets/css/Card.css"
import axios from 'axios'
import { BsFillBarChartLineFill } from "react-icons/bs"
import { GrMoney } from "react-icons/gr"
import { GiProgression } from "react-icons/gi"
import { BsFileBarGraph } from "react-icons/bs"
import { RiUserAddLine } from "react-icons/ri"
import {ModalAsignarLider} from "../Modal/ModalAsignarLider"
import { useDispatch, useSelector } from "react-redux";
import {
   gestorProyecto,
   gestorIDProyecto,
   gestorIDLider,
   openModalAsignarLider,
   closeNavbar,
   consultarProyecto,
} from "../../actions/events";

const CardProyectos=(props)=> {
   const dispatch = useDispatch();
  

function handleEdicion()
    {
    dispatch(consultarProyecto(props.title))
      dispatch(gestorProyecto(props.title));
      dispatch(gestorIDProyecto(props.idProyecto));
      dispatch(gestorIDLider(props.idLider));
    }

    function handleAgregarLider()
    {
      dispatch(closeNavbar());
      dispatch(openModalAsignarLider());
    }
   
        return(
       
             <div className="card card-proyectos text-center" onClick={handleEdicion}>
                 <div className='card-head'>
                    <div className="row">
                        <div className='col-xs-12 col-sm-12  col-md-12 col-lg-2'>
                           {
                              props.idLider===null&&<button onClick={handleAgregarLider} style={{background:'transparent',border:'0'}}><RiUserAddLine style={{color:'black'}}/></button>
                           }
                        </div>
                        <div className='col-xs-12 col-sm-12  col-md-12 col-lg-10 text-center'>
                        <p className="titulo" style={{marginTop:'1rem'}}>Nombre proyecto: {props.title}</p>
                        </div>
                    </div>
                 
                 </div>
                 <Link to="/EdicionProyectos" style={{ textDecoration: 'none' }}>
                 <div className="card-body cuerpo-card" >
               
                 
                 <div className='row'>
                    <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6'>
                       <BsFillBarChartLineFill/>
                    <p className="titulo" style={{color:'black'}}>Avance: {props.pocentaje}%</p>
                    </div>
                    <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6'>
                       <GrMoney/>
                    <p className="titulo" style={{color:'black'}}> $:{props.presupuesto}</p>
                    </div>
                 </div>
                  
                 <div className="row">
                     <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6' >
                           <GiProgression/>
                        <p className="titulo" style={{color:'black'}} >Indicador CPI: {props.indicadorCPI}</p>
                        </div>
                        <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6' >
                        <BsFileBarGraph/>
                        <p className="titulo"style={{color:'black'}} >Indicador SPI: {props.indicadorSPI}</p>
                        </div>            
             
               </div> 
                </div>
                </Link>

               <ModalAsignarLider/>
             </div>
         
             )
    }

export default CardProyectos
