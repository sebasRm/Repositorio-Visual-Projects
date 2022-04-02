import { types } from "../types/types"

const initialState ={
    tiposFacultades:[],
    lideres:[],
    proyecto:[],
 
};

export const eventsReducer = (state=initialState, action)=>{
    switch(action.type){

        case types.gestionAddFacultades:
            return{
                ... state,
                tiposFacultades:[...state.tiposFacultades, action.payload]
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

        case types. gestionProyecto:
            console.log(action.payload)
        return{
            ... state,
            nombreProyecto:true,
     };

     case types. nombreProyecto:
            console.log(action.payload)
        return{
            ... state,
            proyecto:[...state.proyecto, action.payload],
     };





        default:
        return state;
    }
  

}
