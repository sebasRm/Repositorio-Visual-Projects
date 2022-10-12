import { Dropdown, DropdownToggle,DropdownMenu,DropdownItem } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import React,{useState} from "react"
import Swal from "sweetalert2"  
import {
    consutarProgramas,
    consutarFacultades,
    gestorGuardarNombreFacultad,
    registrarPrograma,
    consultarProyectosLider,
   
} from "../../actions/events";
import { Fragment } from "react/cjs/react.production.min";
import "../../assets/css/Card.css";
import axios from 'axios';

import { FaEdit } from "react-icons/fa"

export const CardTipoProyecto =()=>
{
    const dispatch = useDispatch();
    const { objProyectos,tiposFacultades,nombreFacultad,programas}  = useSelector((state) => state);
    const[idFacultad,setIdFacultad]= useState([]);
    let usuario =JSON.parse(sessionStorage.getItem('usuarioActivo'));
    const[dropdown,setDropdown]= useState(false);
    const[nombreDeFacultad,setNombreDeFacultad]= useState([]);
    const[nombrePrograma,setNombrePrograma]= useState([]);
    const[idPrograma,setIdPrograma]= useState([]);
    const[dropdownDos,setDropdownDos]= useState(false);
   
    //console.log(objProyectos)
    const [progama, setPrograma] = useState([])
  // console.log(nombrePrograma)
    const toggelDropdown =()=>{
        setDropdown(!dropdown);
      }

      const toggelDropdownDos =()=>{
        setDropdownDos(!dropdownDos);
          }
    function handleFacultades(nomFacultad,idFacul)
    {
        setNombreDeFacultad( nomFacultad )
        setIdFacultad(idFacul)
    }
    const consutarProgramas=(idFacultad)=> 
    {
        return async (dispatch) =>
        { 
            var formData = new FormData();
            formData.append('consultasProgramas',"1");
            formData.append('idFacultad',idFacultad);
            await axios.post
            (
            'http://localhost/Apis/proyectos.php',
            formData
            ).then((resJson)=>
            {
                    console.log(resJson.data)
            
            setPrograma(resJson.data.datos)
            //setPrograma(resJson.data.datos);    
            }).catch((error)=>
            {
                console.error(error);
            }); 
        }     
    }
    function handleProgramas(nombrePrograma,idPrograma)
    {
        setNombrePrograma(nombrePrograma)
        setIdPrograma(idPrograma)
    }
    function handleRegistrarFcultad()
    {
        dispatch(registrarPrograma(objProyectos[0].idProyecto,idPrograma))
       // dispatch(consultarProyectosLider(usuario.idLider_proyecto))
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
       <div className='dropdown-card-tipo col-xs-12 col-sm-12  col-md-12 col-lg-4'>
           <Dropdown  isOpen={dropdown} toggle={toggelDropdown} onClick={()=>dispatch(consutarFacultades())}>
               <DropdownToggle  style={{marginTop:'0.7rem', background:'#163bdd'}}>
               {nombreDeFacultad ? nombreDeFacultad.length>0?"Facultad: "+nombreDeFacultad: objProyectos&& objProyectos[0].nombreFacultad?objProyectos[0].nombreFacultad:"Por favor selecciones una facultad":"pamelo"}
                  
               </DropdownToggle>
               {
                           tiposFacultades  && (<DropdownMenu style={{background:'white'}}>
                               {
                               tiposFacultades.map(facultad => <div>
                               <DropdownItem>
                               <div onMouseOver={(e) => handleFacultades(facultad.nombreFacultad,facultad.idFacultad)} >
                                        
                                            {facultad.nombreFacultad}
                                            </div>
                               </DropdownItem>
                               </div>)
                               } 
                           </DropdownMenu>)
               }
           </Dropdown>
       </div>

        <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4'>
           
            {
               nombreDeFacultad&&nombreDeFacultad.length>0  ? <Dropdown  isOpen={dropdownDos} toggle={toggelDropdownDos} onClick={consutarProgramas(idFacultad)}>
                <DropdownToggle style={{marginTop:'0.7rem'}} >
                    {nombrePrograma?"Programas: "+nombrePrograma: objProyectos[0].nombre_programa&&objProyectos[0].nombre_programa } 
                </DropdownToggle>
         
                {
                            progama  ? (<DropdownMenu>
                                {
                                progama.map(programa => <div>
                                <DropdownItem respuesta={programa.nombre_programa}>
                                <div onMouseOver={(e) => handleProgramas(programa.nombre_programa,programa.idPrograma)} >
                                             
                                                 {programa.nombre_programa}
                                             </div>
                                 
                                </DropdownItem>
                                </div>)
                                } 
                            </DropdownMenu>):(
                                    Swal.fire(
                                        "Listo",
                                        "Se ha registrado el tipo del proyecto con exito",
                                        "success"
                                      )
                            )
                }
            </Dropdown>:
            <Dropdown  isOpen={dropdownDos} toggle={toggelDropdownDos} onClick={consutarProgramas(objProyectos[0].idFacultad)}>
            <DropdownToggle style={{marginTop:'0.7rem'}} >
                { objProyectos[0].nombre_programa?"Programas: "+objProyectos[0].nombre_programa:"Por favor selecciones un programa"} 
            </DropdownToggle>
     
            {
                        progama  ? (<DropdownMenu>
                            {
                            progama.map(programa => <div>
                            <DropdownItem respuesta={programa.nombre_programa}>
                            <div onMouseOver={(e) => handleProgramas(programa.nombre_programa,programa.idPrograma)} >
                                         
                                             {programa.nombre_programa}
                                         </div>
                             
                            </DropdownItem>
                            </div>)
                            } 
                        </DropdownMenu>):(
                                Swal.fire(
                                    "Listo",
                                    "Se ha registrado el tipo del proyecto con exito",
                                    "success"
                                  )
                        )
            }
        </Dropdown>
            
            
            
           
            }
       
         </div>
      </div>   
</div>
</div>
</div>
 <div className='col-xs-12 col-sm-12  col-md-12 col-lg-2'style={{marginLeft:'-3rem', }} >
 <div style={{padding:0, width: '20em', textAlign:'left'}}>
     <h6>Sección 1.</h6>
     <p style={{color:'#757579',marginRight:'2rem',fontSize:'12px'}}>
     Por favor seleccione en esta seccion, la facultad y programa al que pertenece el proyecto.
     </p>
     {
         
          nombrePrograma.length>0  &&
          <button 
          style={{
           background:'transparent'
          ,border:0
          }} onClick={handleRegistrarFcultad}>
        <FaEdit size={28}/> </button>
     }
   
 </div>
</div>
</Fragment>
)
}