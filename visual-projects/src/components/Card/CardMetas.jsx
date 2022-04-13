import { Fragment } from "react/cjs/react.production.min"
import { IoIosAddCircle } from "react-icons/io"


export const CardMetas=()=>{
    return(
        <Fragment>
               <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6'>
                                    <div className="card cardTipoProyecto" style={{background:"#6896f82c"}}>
                                        <div className="card-head text-center">
                                        <h4 style={{color:'white'}}>Metas</h4>
                                            
                                        </div>
                                         <div className="card-body d-flex justify-content-center">
                                                <div className="card d-flex justify-content-center" style={{width:'3rem', height:'3rem'}}>
                                                    <IoIosAddCircle size={50} />
                                                </div>
                                        </div>
                                </div>
                            </div>
                            <div className='col-xs-12 col-sm-12  col-md-12 col-lg-2'style={{marginLeft:'-3rem', marginTop:'2rem' }} >
                                <div style={{padding:0, width: '20em', textAlign:'left'}}>
                                    <h8 style={{color:'#757579',marginRight:'2rem'}}>
                                    Por favor agrege en esta sección, las metas a cumplir en el proyecto.
                                    </h8>
                                </div>
                            </div>     
        </Fragment>
    )
}