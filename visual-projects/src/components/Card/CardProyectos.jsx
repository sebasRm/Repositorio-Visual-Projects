import React, {Component} from 'react'; 


import {Link} from 'react-router-dom'
import "../../assets/css/Card.css"
import axios from 'axios'
import { BsFillBarChartLineFill } from "react-icons/bs"
import { GrMoney } from "react-icons/gr"
import { GiProgression } from "react-icons/gi"
import { BsFileBarGraph } from "react-icons/bs"



const CardProyectos=(props)=> {

  

let indicadores =JSON.parse(sessionStorage.getItem('indicadores'));
function handleEdicion()
    {
      window.location.href="/EdicionProyectos";
    }
        return(
             <div className="card card-proyectos text-center" onClick={handleEdicion}>
                 <div className='card-head'>
                 <p className="titulo" style={{marginTop:'1rem'}}>Nombre proyecto: {props.title}</p>
                 </div>
                
                 <div className="card-body" >
               
                 
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

               
             </div>)
    }

export default CardProyectos
