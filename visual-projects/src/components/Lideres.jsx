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
import { HiOutlineUserAdd } from "react-icons/hi"
import { TiUserDeleteOutline } from "react-icons/ti"

import Swal from "sweetalert2"
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
export const Lideres = ()=>
{
    const dispatch = useDispatch();
    const {closeNavbar,nombreProyecto,proyecto,idLider,objProyectos}  = useSelector((state) => state);
   //   console.log(objProyectos)

    const handleRegistrar =()=>{
    dispatch(openModalRegistrarDirector());
    }

    const [lideres, setLideres] = useState([])
    const [val, setVal] = useState([])
    //console.log(val)


    const consultarLideres = async()=>
    {
        var formData = new FormData();
        formData.append('consultar_lideres','');
        await axios.post
        (
            'http://localhost/Apis/lider_proyecto.php',
            formData
        ).then((resJson)=>
        {
            setLideres(resJson.data.datos);
             
        }).catch((error)=>
        {
            console.error(error);
        }); 
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
            Swal.fire(
                "Listo",
                "Se ha eliminado con exito el lider "+rowData.nombres,
                "success"
              );
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


    const  handleAgregarLider= async(event, rowData)=> 
    {
        try
        {
            console.log(rowData.idLider_proyecto)
            console.log(nombreProyecto)
            var formData = new FormData();
            formData.append('idLiderproyecto',rowData.idLider_proyecto);
            formData.append('idProyecto',proyecto);
           const res= await axios.post('http://localhost/Apis/agregarLider.php',formData);
         console.log(res.data);
         Swal.fire(
            "Listo",
            "Se ha asignado el lider "+rowData.nombres+" al proyecto "+ nombreProyecto,
            "success"
          );
         
        }
        catch(error)
        {
            console.error(error);
        } 
    }
   
   
return (
    <>

   {!closeNavbar && <Navbar/>} 
    <div className="row">
        <div className="col-xs-12 col-sm-12  col-md-12 col-lg-12 text-center">
        <div>
                    <button className="botonBuscar"
                            type="button" class="btn " 
                            style={{marginTop:'0.5rem',background:'#0b2dc4', color:'white'}}
                            onClick={handleRegistrar}
                            
                            >
                            Registrar Lideres
                            </button>
                        </div>
                      </div>         
       
                         
        <div className="col-xs-12 col-sm-12  col-md-12 col-lg-12">
        <div className="container">
        <ContextMenuTrigger id="same_unique_identifier2">

                <MaterialTable
                title=""
                columns={columns}
                data={lideres}
                actions={[
                   
                    (rowData) =>
                    
               (objProyectos.map((idlider)=>setVal(idlider.idLider_proyecto)),
                val!=rowData.idLider_proyecto ?
                   {
                    icon: ()=>(
                        <AiFillDelete/>
                        ), tooltip: 'Eliminar Lider',
                        onClick: (event, rowData) => handleEliminarUsuario(event, rowData),
                   }:
                   {
                 
                    icon: ()=>(
                       
                        <AiFillDelete/>
                        ), tooltip: 'Primero desagrege al Lider del proyecto asosicado',
                        onClick: (event, rowData) => handleEliminarUsuario(event, rowData),
                        disabled:true
                   }), 
                   
               {
                   icon: ()=>(
                    <AiFillEdit/>
                   ), tooltip: 'Editar Lider',
                   onClick: (event, rowData) => handleEditarUsuario(event, rowData),
               },
            
           
               closeNavbar ?
               (rowData) =>
                   ( idLider == rowData.idLider_proyecto
                    ?{
                        icon: ()=>(
                            <TiUserDeleteOutline/>
                           ), tooltip: 'Desagregar al Lider del proyecto',
                           onClick: (event, rowData) => handleAgregarLider(event, rowData),
                     
                    }:{
                     
                        icon: ()=>(
                            <HiOutlineUserAdd/>
                           ), tooltip: 'agregar Lider',
                           onClick: (event, rowData) => handleAgregarLider(event, rowData),
                    }
                    ):(console.log("nada"))
                   
                
             
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
