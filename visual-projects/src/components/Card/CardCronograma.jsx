import { Fragment } from "react/cjs/react.production.min"
import { AiFillFlag } from "react-icons/ai"
import { FcPlanner } from "react-icons/fc"
import { IoIosAddCircle } from "react-icons/io"
import "../../assets/css/Card.css"
export const CardCronograma=()=>{
    return(
        <Fragment>
         <div className='col-xs-12 col-sm-12  col-md-12 col-lg-12'>
        <div className="card" style={{background:"#6896f82c"}}>
                <div className="card-head text-center">
                <FcPlanner size={40}/>
                <h4 style={{color:'white'}}>Cronograma y Planeación</h4>
                    
                </div>
                    <div className="card-body">
                    <div className="row">
                                            <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center'>
                                                <AiFillFlag size={25} />
                                              <h6 style={{color:'black'}}>Objetivo:</h6>
                                            </div>
                                            <div className='col-xs-12 col-sm-12  col-md-12 col-lg-8'>
                                            <div className="input-modal">
                                                    <input
                                                        style={{width:'17rem',height:'3rem'}}
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
                    <div className="divider" style={{width:'25rem',height:'0.2rem', marginLeft:'0.7rem', background:'#163bdd',marginTop:'1rem'}}></div>
                    <div className="row" style={{marginTop:'1rem'}}>
                    <div className='col-xs-12 col-sm-12  col-md-12 col-lg-12 text-center'>
                    <h6 style={{color:'black'}}>Actividades planeadas</h6>
                    </div>
                    <div className="col-xs-12 col-sm-12  col-md-12 col-lg-12 text-center">
                         <IoIosAddCircle size={50} />
                                         
                                
                    </div>
                    </div>
                </div>
                </div>
        </div>                         
        </Fragment>
    )
}
