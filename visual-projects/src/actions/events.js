import { types } from "../types/types";
import { fetchConToken } from "../helpers/ferchConToken";
import axios from 'axios'
export const gestionAddFacultades = (event)=>({
    type:types.gestionAddFacultades,
    payload:event,
})

export const gestionDeletedFacultades = (event)=>({
    type:types.gestionDeletedFacultades,
    payload:event,
})

export const openModalRegistrarDirector = ()=>({
    type:types.uiOpenModalRegistrarDirector,
    
})

export const closeModalRegistrarDirector = ()=>({
    type:types.uiCloseModalRegistrarDirector,
    
})

export const actualizarVistaLideres = (event)=>({
    type:types.actualizarVistaUsuariosLideres,
    payload:event,
    
})

export const actualizar = (event)=>({
    type:types.actualizar,
    payload:event,
    
})

export const openModalEditarLider = ()=>({
    type:types.uiOpenModalEditarLider,
    
})

export const closeModalEditarLider = ()=>({
    type:types.uiCloseModalEditarLider,
    
})

export const gestionAddLider = (event)=>({
    type:types.gestionAddLider,
    payload:event,
    
})


export const gestorProyecto = (event)=>({
    type:types.gestionProyectoNombre,
    payload:event,
    
})

export const gestorIDProyecto = (event)=>({
    type:types.gestionIdProyecto,
    payload:event,
    
})

export const gestorIDLider = (event)=>({
    type:types.gestionIdLider,
    payload:event,
    
})

export const gestorObjProyecto = (event)=>({
    type:types.gestionObjProyecto,
    payload:event,
    
})



export const openModalAsignarLider = ()=>({
    type:types.uiOpenModalAsignarLider,

})
export const openCloseAsignarLider = ()=>({
    type:types.uiCloseModalAsignarLider,

})



export const closeNavbar = ()=>({
    type:types.uiCloseNavbar,

})

const gestionGuardarProyecto = (event)=>({
    type:types.gestionProyecto,
    payload:event,
})



const gestionFacultades=(event)=>({
    type:types.gestionAddFacultades,
    payload:event,
})

const gestionGuardarProductos=(event)=>({
    type:types.gestionProductos,
    payload:event,
})




/**
 * Consultas a las Apis
 */

/**
 * Consusta de los proyectos
 * @param {*} nombreProyecto se hereda de 
 * @returns 
 */
export const consultarProyecto =
(
nombreProyecto
)=>
{   
    return async (dispatch) =>{ 
    var formData = new FormData();
    formData.append('consultarProyecto', '1');
    formData.append('nombreProyecto',nombreProyecto);
    await axios.post
    (
    'http://localhost/Apis/proyectos.php',formData
    ).then((resJson)=>
    {
        console.log(resJson);
        dispatch(gestionGuardarProyecto(resJson.data.datos[0]))  
    //setProyecto(resJson.data.datos[0])
    }).catch((error)=>
    {
        console.error(error);
    }); 
        
    }  
}


/**
 * Meotodo para consultar los proyectos del lider mediante su id.
 * @param {*} idLider_proyecto se hereda del Storange del login.
 * @returns El proyecto asignado por la coordinadora.
 */
export const consultarProyectosLider=(idLider_proyecto)=>
{
  return async (dispatch) =>
    { 
        var formData = new FormData();
        formData.append('identificacion', idLider_proyecto);
        await axios.post
        (
            'http://localhost/Apis/lider.php',
            formData
        ).then((resJson)=>
        {
            dispatch(gestorObjProyecto(resJson.data.datos))
        }).catch((error)=>
        {
            console.error(error);
        }); 
    }
}

export const consutarFacultades=()=> 
      {
        return async (dispatch) =>
        { 
        var formData = new FormData();
        formData.append('consultasTipo', '1');
        await axios.post
        (
        'http://localhost/Apis/proyectos.php',
        formData
        )
        .then((resJson)=>
        {  
        dispatch(gestionFacultades(resJson.data.datos))
        }).catch((error)=>
        {
            console.error(error);
        });
    }
}


export const consutaProgramas= async(idFacultad)=> 
{
   var formData = new FormData();
        formData.append('consultasProgramas',idFacultad);
        await axios.post
        (
          'http://localhost/Apis/proyectos.php',
          formData
        ).then((resJson)=>
        {
          console.log(resJson.data)
        //  setPrograma(resJson.data.datos);    
        }).catch((error)=>
        {
            console.error(error);
        });      
}


export const consutarProductos= (idProyecto)=> 
{
    return async (dispatch) =>
        { 
        var formData = new FormData();
        formData.append('consultarProductos','1');
        formData.append('idProyecto',idProyecto);
        await axios.post
        (
          'http://localhost/Apis/proyectos.php',
          formData
        ).then((resJson)=>
        {
          console.log(resJson.data)
          dispatch(gestionGuardarProductos(resJson.data.datos))
        //  setPrograma(resJson.data.datos);    
        }).catch((error)=>
        {
            console.error(error);
        });  
    }    
}

