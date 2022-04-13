import { Dropdown, DropdownToggle,DropdownMenu,DropdownItem } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import React,{useState} from "react"
import {
  
    consutarFacultades,
   
} from "../../actions/events";
import { Fragment } from "react/cjs/react.production.min";
export const CardTipoProyecto =()=>
{
    const dispatch = useDispatch();
    const { objProyectos,tiposFacultades,}  = useSelector((state) => state);
    const[dropdown,setDropdown]= useState(false);
    const[dropdownDos,setDropdownDos]= useState(false);
    
    const toggelDropdown =()=>{
        setDropdown(!dropdown);
      }

      const toggelDropdownDos =()=>{
        setDropdownDos(!dropdownDos);
          }
return(
    <Fragment>
    <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6'>
    <div className="card cardTipoProyecto" style={{background:"#6896f82c"}}>
    <div className="card-body">
     <div className="row">
       <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4'>
         <h4 style={{color:'black'}}>Tipo Proyecto:</h4>
       </div>
       <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4'>
           <Dropdown  isOpen={dropdown} toggle={toggelDropdown} onClick={()=>dispatch(consutarFacultades())}>
               <DropdownToggle style={{marginTop:'0.7rem', background:'#163bdd'}}>
                   {objProyectos.nombreFacultad?objProyectos[0].nombreFacultad:"Facultades" }
               </DropdownToggle>
               {
                           tiposFacultades  && (<DropdownMenu>
                               {
                               tiposFacultades.map(facultad => <div>
                               <DropdownItem respuesta={facultad.idFacultad}>
                               {facultad.nombreFacultad}
                               </DropdownItem>
                               </div>)
                               } 
                           </DropdownMenu>)
               }
           </Dropdown>
       </div>

        <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4'>
       <Dropdown  isOpen={dropdownDos} toggle={toggelDropdownDos} onClick={()=>dispatch(consutarFacultades())}>
           <DropdownToggle style={{marginTop:'0.7rem'}}>
               {objProyectos.nombreFacultad?objProyectos.nombreFacultad:"Programas" }
           </DropdownToggle>
           {
                       tiposFacultades  && (<DropdownMenu>
                           {
                           tiposFacultades.map(facultad => <div>
                           <DropdownItem respuesta={facultad.idFacultad}>
                           {facultad.nombreFacultad}
                           </DropdownItem>
                           </div>)
                           } 
                       </DropdownMenu>)
           }
       </Dropdown>
         </div>
      </div>   
</div>
</div>
</div>
 <div className='col-xs-12 col-sm-12  col-md-12 col-lg-2'style={{marginLeft:'-3rem', }} >
 <div style={{padding:0, width: '20em', textAlign:'left'}}>
     <h8 style={{color:'#757579',marginRight:'2rem'}}>
     Por favor seleccione en esta seccion, la facultad y programa al que pertenece el proyecto.
     </h8>
 </div>
</div>
</Fragment>
)
}