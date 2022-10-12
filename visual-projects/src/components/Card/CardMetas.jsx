import { Fragment} from "react/cjs/react.production.min"
import { useState}  from "react";
import { IoIosAddCircle } from "react-icons/io"
import { useDispatch, useSelector } from "react-redux";
import { AiFillLock } from "react-icons/ai"
import { ModalCrearMeta } from "../Modal/ModalCrearMeta";
import {
    consultarMetas,
    consultarProductos
} from "../../actions/events";
import Carousel from "react-elastic-carousel";
import { useEffect}  from "react";

export const CardMetas=()=>{
    const dispatch = useDispatch();
     const [modalCrear, setModalCrear] = useState(false);
    const { objProyectos, metas}  = useSelector((state) => state);
    useEffect(() => {
        if (objProyectos) {
            dispatch(consultarMetas(objProyectos[0].idPlaneacion))
        } 
      }, []);
   
    //dispatch(consultarMetas(objProyectos && objProyectos[0].idPlaneacion))
    function handleModalCrear()
    {
        setModalCrear(!modalCrear)
        dispatch(consultarProductos(objProyectos[0].idProyecto,objProyectos[0].idMetas))
    }
    return(
        <Fragment>
            {
                objProyectos && objProyectos[0].objetivo? ( 
                    
                    <div className="row">
                        
                    <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6'>
                <div className="card cardTipoProyecto" style={{background:"#6896f82c"}}>
                    <div className="card-head text-center">
                    <h4 style={{color:'white'}}>Metas</h4>
                        
                    </div>
                     <div className="card-body d-flex justify-content-center">
                         {
                             metas && 
                                <Carousel>
                            
                                
                                        {
                                            metas.map(meta=> 
                                            <>
                                                <div className="card">
                                                    <div className="card-head">
                                                    <p> {meta.nombre} </p> 
                                                    </div>
                                                    <div className="card-body">
                                                    <p> {meta.descripcion} </p> 
                                                </div>
                                                </div>
                                           </>
                                            )
                                        }
                              
                              </Carousel>
                         }
                               
                              <button style={{background:'transparent', border:0}} onClick={handleModalCrear}>
                              <IoIosAddCircle size={50} />
                            </button>  
                    </div>
            </div>
        </div>
        <div className='col-xs-12 col-sm-12  col-md-12 col-lg-2'style={{marginLeft:'-3rem', marginTop:'2rem' }} >
            <div style={{padding:0, width: '20em', textAlign:'left'}}>
                <h6>Sección 3.</h6>
                <p style={{color:'#757579',marginRight:'2rem',fontSize:'12px'}}>
                Por favor agrege en esta sección, las metas a cumplir en el proyecto.
                </p>
            </div>
            </div>
            <ModalCrearMeta 
             modalCrear={modalCrear}
             setModalCrear={setModalCrear}
             />
        </div>     ):( 
             <div className="row">
            <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6'>
                <div className="card cardTipoProyecto" style={{background:"#6d6c6b"}}>
                    <div className="card-head text-center">
                    <h4 style={{color:'white'}}>Metas</h4>
                        
                    </div>
                     <div className="card-body d-flex justify-content-center">
                            <div className="card d-flex justify-content-center" style={{width:'3rem', height:'3rem'}}>
                              <button>
                              <IoIosAddCircle size={50} />
                            </button>  
                            </div>
                    </div>
            </div>
        </div>
        <div className='col-xs-12 col-sm-12  col-md-12 col-lg-2'style={{marginLeft:'-2.4rem' }} >
            <div style={{padding:0, width: '20em', textAlign:'left'}}>
                <h6>Sección 3.</h6>
                <p style={{color:'#757579',marginRight:'2rem',fontSize:'12px'}}>
                Por favor agrege en esta sección, las metas a cumplir en el proyecto.
                </p>
            </div>

            <AiFillLock size={50} style={{marginLeft:'8rem', marginTop:'0.5rem'}}/>

            <div style={{padding:0, width: '20em', textAlign:'center'}}>
            <p style={{color:'red',marginRight:'2rem', fontSize:'12px' }}>
            Contenido Bloqueado, termine la sección 2 para acceder a esta.
            </p>
 
</div>
            </div>
            
        </div> 
        
        )
        
            }
            
        </Fragment>
    )
}