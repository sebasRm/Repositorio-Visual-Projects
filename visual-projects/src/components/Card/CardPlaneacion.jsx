import { Fragment } from "react/cjs/react.production.min"
import { AiFillFlag } from "react-icons/ai"
import { GiMoneyStack } from "react-icons/gi"

export const CardPlaneacion=()=>{
return(
    <Fragment>
         <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6'>
                                    <div className="card cardTipoProyecto" style={{background:"#6896f82c"}}>
                                         <div className="card-body">
                                          <div className="row">
                                            <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center'>
                                                <AiFillFlag size={25} />
                                              <h4 style={{color:'black'}}>Objetivo:</h4>
                                            </div>
                                            <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4'>
                                            <div className="input-modal">
                                                    <input
                                                        style={{width:'18rem',height:'5rem'}}
                                                        name="identificacion"
                                                      //  value={identificacion}
                                                       // onChange={handleInputChange}
                                                        type="text"
                                                        className="form-control"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        placeholder="Objetivo del proyecto"
                                                    />
                                                    </div>
                                            </div>
                                           </div> 
                                           <div className="row">
                                            <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center'>
                                                <GiMoneyStack size={25} />
                                              <h5 style={{color:'black'}}>Presupuesto:</h5>
                                            </div>
                                            <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4'>
                                            <div className="input-modal">
                                                    <input
                                                        style={{width:'18rem',marginTop:'1rem'}}
                                                        name="identificacion"
                                                      //  value={identificacion}
                                                       // onChange={handleInputChange}
                                                        type="text"
                                                        className="form-control"
                                                        aria-label="Username"
                                                        aria-describedby="basic-addon1"
                                                        placeholder="Presupuesto del proyecto"
                                                    />
                                                    </div>
                                            </div>
                                           </div>   
                                     </div>
                                </div>
                            </div>
                            <div className='col-xs-12 col-sm-12  col-md-12 col-lg-2'style={{marginLeft:'-3rem', marginTop:'2rem' }} >
                                <div style={{padding:0, width: '20em', textAlign:'left'}}>
                                    <h8 style={{color:'#757579',marginRight:'2rem'}}>
                                    Por favor digite en esta sección, el objetivo principal del proyecto y el presupuesto planeado.
                                    </h8>
                                </div>
                            </div> 
    </Fragment>
)
}