import React,{useState,useEffect} from "react";
import { useDispatch,useSelector } from "react-redux";
import "../assets/css/PanelBusquedaAvanzada.css"
import axios from 'axios'
import * as Hi from'react-icons/hi'

import {
  consutaTipo
} from "../actions/events";
import { Dropdown, DropdownToggle,DropdownMenu,DropdownItem } from "reactstrap";
import { findAllObject } from "../helpers/findObjects";
import {Link} from 'react-router-dom'


export const PanelBusquedaAvanzada = () => {

  const dispatch = useDispatch();
  const {facultad}  = useSelector((state) => state);
  let respuesta=[];
 
  //console.log(programas[0].nombre_programa)
 
  const[dropdown,setDropdown]= useState(false);
  const[tipos,setTipos]= useState([]);
  const[dropdownDos,setDropdownDos]= useState(false);
  const [infoCursor, setInfoCursor] = useState("");

  

  const toggelDropdown =()=>{
    setDropdown(!dropdown);
  }
  const toggelDropdownDos =()=>{
    setDropdownDos(!dropdownDos);
  }

  const [progama, setPrograma] = useState([])
  //console.log(facultad)
  /*useEffect(() => {
    dispatch(consutaTipo());
  }, [facultad]);*/

  const handleConsultarFacultades =()=>{
    dispatch(consutaTipo())
  }

const consutaProgramas= async(idFacultad)=> 
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
          setPrograma(resJson.data.datos);    
        }).catch((error)=>
        {
            console.error(error);
        });      
}

  return (
   
    <>
    <div className=" container-fluid" style={{backgroundColor:'#6895f8',  height:'50px'}}>
    <div className="row  justify-content-center">
          <div className="col-xs-12 col-sm-12  col-md-12 col-lg-8">
            <div className="row">
              <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4">

              </div>
                <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4">
                    <div className="btn-busqueda " style={{ marginTop: '-0.5rem'}}>
                      <Hi.HiSearch className="icono"/>
                            <input
                            className="prompt busqueda"
                            type="text"
                            placeholder="Busqueda de proyectos"
                            aria-label="Search"
                            typeicon="search"
                            name="inputSearch"
                            />    
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12  col-md-12 col-lg-2">
                      <Dropdown  isOpen={dropdown} toggle={toggelDropdown} onClick={handleConsultarFacultades}>
                      <DropdownToggle style=
                      {{background:'#0b2dc4',
                        border:0,
                        width:'8rem',
                        marginTop:'0.5rem',
                        //marginLeft:'7rem'
                        }} 
                      className="dropdown_user" >
                      <div className="row">
                          
                          <div className="col-xs-12 col-sm-12  col-md-4 col-lg-4">
                          Facultades
                          </div>
                          <div className="col-xs-12 col-sm-12  col-md-1 col-lg-2">
                          <Hi.HiDocumentSearch className="iconoFacultades"/>
                          
                          </div> 
                          </div>    
                        </DropdownToggle>
                        
                        <DropdownMenu>
                        
                                <Dropdown  isOpen={dropdownDos} toggle={toggelDropdownDos}>
                                  {
                                    facultad ?  facultad.map(facultad =>
                                        <div >
                                            <DropdownToggle style={{background:'transparent', color:'black', border:0, width:'20rem',}} className="align-items-left">
                                            <div onMouseOver={(e) => consutaProgramas( facultad.idFacultad )} >
                                            {facultad.nombreFacultad}
                                            </div>
                                            </DropdownToggle>
                                            {
                                              progama  && (<DropdownMenu>
                                                {
                                                  progama.map(progama => <div>
                                                  <DropdownItem respuesta={facultad.idFacultad}>
                                                {progama.nombre_programa}
                                                </DropdownItem>
                                                  </div>)
                                                } 
                                              </DropdownMenu>)
                                            }
                                    
                                          </div>):(console.log("no deberia hacer nada"))
                                  }
                                </Dropdown>
                        
                          </DropdownMenu> 
                      </Dropdown>
           </div>
           <div className="col-xs-12 col-sm-12  col-md-1 col-lg-1">
           <button className="botonBuscar"
            type="button" class="btn " 
            style={{marginTop:'0.5rem',background:'#0b2dc4', color:'white'}}>
              Buscar
            </button>
           </div>

           <div className="border-right"> </div>
     
            </div>
            
   
          </div>
          
      
             
         
          
          
          </div>

        </div>
        
    

    </>
  );
}

