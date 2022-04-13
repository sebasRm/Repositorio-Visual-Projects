import { types } from "../types/types"

const initialState ={
    tiposFacultades:[],
    lideres:[],
    proyecto:[],
    objProyectos:[],
    Proyecto:[],

 
};

export const eventsReducer = (state=initialState, action)=>{
    switch(action.type){

        case types.gestionAddFacultades:
            return{
                ... state,
                tiposFacultades: action.payload
         };
         
         case types.gestionProductos:
            return{
                ... state,
                productos: action.payload
         };

         case types.gestionObjProyecto:
            
            return{
                ... state,
                objProyectos:action.payload
         };

         case types.gestionProyecto:
            return{
                ... state,
                Proyecto:action.payload
         };
 
        case types.gestionDeletedFacultades:
            return {
            ...state,
            tiposFacultades: state.tiposFacultades.filter((data) => data.nombre !== action.payload.nombre),
        };  

        case types.uiOpenModalRegistrarDirector:
            return{
                ... state,
                modalRegistrar:true,
         };

         case types.uiCloseModalRegistrarDirector:
            return{
                ... state,
                modalRegistrar:false,
         };


         case types.actualizarVistaUsuariosLideres:
             console.log(action.payload)
            return{
                ... state,
                modalActualizar:action.payload,
         };

         case types.actualizar:
            console.log(action.payload)
           return{
               ... state,
               actualiza:action.payload,
        };
         
        case types.uiOpenModalEditarLider:
            return{
                ... state,
                modalEditarLider:true,
         };

         case types.uiCloseModalEditarLider:
            return{
                ... state,
                modalEditarLider:false,
         };

         case types.gestionAddLider:
            console.log(action.payload)
           return{
               ... state,
               lideres:action.payload,
        };

        case types. gestionProyectoNombre:
            console.log(action.payload)
        return{
            ... state,
            nombreProyecto:action.payload,
     };

     case types. gestionIdProyecto:
            console.log(action.payload)
        return{
            ... state,
            proyecto: action.payload,
     };

     case types. gestionIdLider:
            console.log(action.payload)
        return{
            ... state,
            idLider: action.payload,
     };

     case types.uiOpenModalAsignarLider:
            return{
                ... state,
                modalAsignarLider:true,
         };

         case types.uiCloseModalAsignarLider:
            return{
                ... state,
                modalAsignarLider:false,
         };
     case types.uiCloseNavbar:
         return{
            ... state,
            closeNavbar:true,
     };

        default:
        return state;
    }
  

}
