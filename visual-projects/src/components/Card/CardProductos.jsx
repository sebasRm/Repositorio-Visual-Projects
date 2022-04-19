import React, {Component} from 'react'; 


import {Link} from 'react-router-dom'
import "../../assets/css/Card.css"
import axios from 'axios'
import { BsFillBarChartLineFill } from "react-icons/bs"
import { GrMoney } from "react-icons/gr"
import { GiProgression } from "react-icons/gi"
import { BsFileBarGraph } from "react-icons/bs"
import { RiUserAddLine } from "react-icons/ri"

import { useDispatch, useSelector } from "react-redux";
import { Fragment } from 'react/cjs/react.production.min';

import Carousel from "react-elastic-carousel";
const CardProductos=(props)=> {
   const dispatch = useDispatch();
  
   const { productos,objProyectos}  = useSelector((state) => state);
   const breakpoint = [
    {width:1,itemsToShow:3},
    {width:550,itemsToShow:2},
    {width:768,itemsToShow:3},
    {width:1200,itemsToShow:6},
    
  ]
        return(
                <Fragment>

                    {
                      objProyectos&&  objProyectos[0].nombre &&    <div className="row">
              
                      <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6'>                                
                                                     <Carousel 
                                                         breakPoints={breakpoint}
                                                         style={{marginTop:'5%'}}
                                                         
                                                         >
                                                             {
                                                                     productos &&
                                                                     (productos.map(producto =>(
                                                                             
                                                                                 <div className="card" style={{width:'12rem', height:'5rem'}}>
                                                                                     <div className="card-head text-center" style={{color:'white'}}>
                                                                                       <h6>producto</h6>  
                                                                                     </div>
                                                                                     <div className="card-body" style={{color:'black'}}>
                                                                                         {producto.nombre_producto}
                                                                                     </div>
                                                                                 </div>
                                                                                   
                                                                           
                                                                         )))  
                                                             }     
                                                         </Carousel>
                                                   
                                             
                                    
                                 </div>
                                 <div className='col-xs-12 col-sm-12  col-md-12 col-lg-2'style={{marginLeft:'-3rem', marginTop:'2rem' }} >
                                     <div style={{padding:0, width: '20em', textAlign:'left'}}>
                                         <h8 style={{color:'#757579',marginRight:'2rem'}}>
                                        En esta sección, puede visualizar los diferentes beneficiarios o productos del proyecto.
                                         </h8>
                                     </div>
                                 </div>     
                    
                                 </div>      
                    }
  
                </Fragment>
             )
    }

export default CardProductos
