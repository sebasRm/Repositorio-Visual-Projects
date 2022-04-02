import { types } from "../types/types";

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
    type:types.nombreProyecto,
    payload:event,
    
})