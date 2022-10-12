
import { useDispatch, useSelector } from "react-redux";
import { Modal, ModalHeader, FormGroup } from "reactstrap";
import { LideresCard } from "../Card/LideresCard";
import Swal from "sweetalert2"
import {
    openCloseAsignarLider,
} from "../../actions/events";

export const ModalAsignarLider=()=>{
    const dispatch = useDispatch();
    const { modalAsignarLider}  = useSelector((state) => state);
    function handleCerrar()
    {
        dispatch(openCloseAsignarLider())
    }

    function handleAceptar()
    {
        Swal.fire(
            "Listo",
            "Se han realizado los cambios",
            "success"
          );
        dispatch(openCloseAsignarLider())
    }




    return(
        
              <Modal style={{maxWidth:'60rem',display: 'block', background:'transparent'}} isOpen={modalAsignarLider}>
                <ModalHeader>
                    Asignar Lider de proyecto
                </ModalHeader>
                <FormGroup>
                   <LideresCard/>
                </FormGroup>
                <div className="d-flex justify-content-center">
                <button className="btn" onClick={handleAceptar}>
                    Aceptar
                </button>
                <button className="btn " onClick={handleCerrar}>
                    Cerrar
                </button>
                </div>


       </Modal>
        
    )
}