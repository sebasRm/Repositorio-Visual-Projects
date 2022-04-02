import React, { useState } from "react";
import Navbar from './Navbar/NavBar'
import MaterialTable,{  MTableToolbar,
    MTableBodyRow,
    MTableBody,} from "@material-table/core";
import {
    openModalRegistrarDirector,
    openModalEditarLider,
    gestionAddLider,
} from "../actions/events";
import { useDispatch, useSelector } from "react-redux";
import { ModalRegistrarDirector } from "./Modal/ModalRegistrarDirector";
import { ModalEditarLider } from "./Modal/ModalEditarLider";
import { columns } from "../helpers/columns";
import axios from 'axios';
import { FaHeart } from "react-icons/fa";
import * as Ai from 'react-icons/ai';
import * as Hi from'react-icons/hi'
import { AiFillEdit } from "react-icons/ai"
import { AiFillDelete } from "react-icons/ai"
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
export const Directores = ()=>
{
    const dispatch = useDispatch();
    const {actualiza}  = useSelector((state) => state);
   // console.log(actualiza)
  
    const handleRegistrar =()=>{
    dispatch(openModalRegistrarDirector());
    }

    const [lideres, setLideres] = useState([])
   
    const consultarLideres = async()=>{
        try
        {
            var formData = new FormData();
            formData.append('consultar_lideres','');
            const res =await axios.post('http://localhost/Apis/lider_proyecto.php',formData).then((resJson)=>{
            //    console.log(resJson.data)
                
                return resJson.data.datos;    
                
            }); 
            setLideres(res);        
            return res;   
         
        }
        catch(error)
        {
            console.error(error);
        } 
           
    }
   
    consultarLideres();

    function handleEditarUsuario (event, rowData){
        dispatch(openModalEditarLider())
        dispatch(gestionAddLider(rowData))
    }
    const  handleEliminarUsuario= async(event, rowData)=> 
    {
        try
        {
            var formData = new FormData();
            formData.append('idUsuarios',rowData.idUsuarios);
            const res =await axios.post('http://localhost/Apis/eliminar_lider.php',formData).then((resJson)=>{
            //    console.log(resJson.data)
                
                return resJson.data.datos;    
                
            }); 
            setLideres(res);        
            return res;   
         
        }
        catch(error)
        {
            console.error(error);
        } 
    }
   
   
return (
    <>

    <Navbar/>
    <div className="row">
        <div className="col-xs-12 col-sm-12  col-md-12 col-lg-12 text-center">
        <div>
                    <button className="botonBuscar"
                            type="button" class="btn " 
                            style={{marginTop:'0.5rem',background:'#0b2dc4', color:'white'}}
                            onClick={handleRegistrar}
                            
                            >
                            Registrar Directores
                            </button>
                        </div>
                      </div>         
       
                         
        <div className="col-xs-12 col-sm-12  col-md-12 col-lg-12">
        <div className="container-fluid">
        <ContextMenuTrigger id="same_unique_identifier2">

                <MaterialTable
                title=""
                columns={columns}
                data={lideres}
                actions={[
               {
                   icon: ()=>(
                    <AiFillEdit/>
                   ), tooltip: 'usuario',
                   onClick: (event, rowData) => handleEditarUsuario(event, rowData),
               },

               {
                icon: ()=>(
                 <AiFillDelete/>
                ), tooltip: 'usuario',
                onClick: (event, rowData) => handleEliminarUsuario(event, rowData),
               }
                ]}
                >    
                </MaterialTable>
         </ContextMenuTrigger>
        </div>
        </div> 
    </div>


    <ModalRegistrarDirector/>
    <ModalEditarLider/>
    </>
  
    
)
}
