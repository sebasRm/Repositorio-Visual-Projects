import { Fragment } from "react/cjs/react.production.min"
import { AiFillFlag } from "react-icons/ai"
import { GiMoneyStack } from "react-icons/gi"
import { AiFillLock } from "react-icons/ai"
import { useState,useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import "../../assets/css/Card.css"
import { FaEdit } from "react-icons/fa"
import {
  registrarPlaneacion
 
} from "../../actions/events";
export const CardPlaneacion=()=>{
  const dispatch = useDispatch();
    const { objProyectos}  = useSelector((state) => state);
    const initiEvent = {
      objetivo: "",
      presupuesto:"",
   
    };
  //console.log(objProyectos)
  const [formValues, setformValues] = useState(initiEvent);
  const { objetivo,presupuesto } = formValues;
  
  useEffect(() => {
    if (objProyectos) {
      setformValues({
        objetivo: objProyectos[0].objetivo,
        presupuesto: objProyectos[0].presupuesto,
      });
    } else {
      setformValues(initiEvent);
    }
  }, [objProyectos, setformValues]);


  const handleInputChange = ({ target }) => {
    setformValues({
      ...formValues,
      [target.name]: target.value,
    });
  };
 
return(
    <Fragment>
        {
            objProyectos&&  objProyectos[0].nombreFacultad ? ( <div className="row" >
          <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6'>
          <div className="card cardPlaneacion" style={{background:"#6896f82c"}}>
                  <div className="card-body">
                    <div className="row">
                      <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center'>
                          <AiFillFlag />
                        <h4 style={{color:'black'}}>Objetivo:</h4>
                      </div>
                      <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4'>
                      <div className="input-modal">
                              <input
                                  style={{width:'18rem',height:'5rem'}}
                                  name="objetivo"
                                  value={objetivo}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="form-control"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  placeholder="Objetivo del proyecto"
                                  size="40"
                                  maxlength="40"
                              />
                              </div>
                      </div>
                    </div> 
                    <div className="row">
                      <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center'>
                          <GiMoneyStack />
                        <h5 style={{color:'black'}}>Presupuesto:</h5>
                      </div>
                      <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4'>
                      <div className="input-modal">
                              <input
                                  style={{width:'18rem',marginTop:'1rem'}}
                                  name="presupuesto"
                                  value={presupuesto}
                                  onChange={handleInputChange}
                                  type="text"
                                  className="form-control"
                                  aria-label="Username"
                                  aria-describedby="basic-addon1"
                                  placeholder= "Presupuesto del proyecto"
                              />
                              </div>
                      </div>
                    </div>   
              </div>
          </div>
          </div>
              <div className='col-xs-12 col-sm-12  col-md-12 col-lg-2'style={{marginLeft:'-2rem', marginTop:'2rem' }} >
                  <div style={{padding:0, width: '20em', textAlign:'left'}}>
                  <h6>Sección 2.</h6>
                      <p style={{color:'#757579',marginRight:'2rem',fontSize:'12px'}}>
                      Por favor digite en esta sección, el objetivo principal del proyecto y el presupuesto planeado.
                      </p>
                      {
                          !presupuesto=="" & !objetivo=="" ?
                          <button 
                          style={{
                            background:'transparent'
                          ,border:0,
                          }}
                          onClick={()=>dispatch(registrarPlaneacion(objProyectos[0].idProyecto,objetivo,presupuesto))} >
                        <FaEdit size={28}/> </button>:""
                      }
                  </div>
              </div> 
              </div>):( <div className="row">


          <div className='col-xs-12 col-sm-12  col-md-12 col-lg-6'>

          <div className="card cardPlaneacion" style={{background:"#6d6c6b"}} >
              <div className="card-body">
                <div className="row">
                  <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center'>
                      <AiFillFlag />
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
                              placeholder={ objProyectos[0].objetivo? objProyectos[0].objetivo:"Digite el Objetivo del proyecto"}
                              disabled={true}
                          />
                          </div>
                  </div>
                </div> 
                <div className="row">
                  <div className='col-xs-12 col-sm-12  col-md-12 col-lg-4 text-center'>
                      <GiMoneyStack />
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
                              disabled={true}
                          />
                          </div>
                  </div>
                </div>   
          </div>
      </div>
  </div>
  <div className='col-xs-12 col-sm-12  col-md-12 col-lg-2'style={{marginLeft:'-2.4rem' }} >
      <div style={{padding:0, width: '20em', textAlign:'left'}}>
        <h6>Sección 2.</h6>
          <p style={{color:'#757579',marginRight:'2rem',fontSize:'12px'}}>
          Por favor digite primero el tipo de proyecto al que pertenece.
          </p>
        
      </div>
      
        <AiFillLock size={50} style={{marginLeft:'8rem', marginTop:'0.5rem'}}/>

        <div style={{padding:0, width: '20em', textAlign:'center'}}>
          <p style={{color:'red',marginRight:'2rem', fontSize:'12px',  }}>
          Contenido Bloqueado, termine la sección 1 para acceder a esta.
          </p>
        
      </div>
    
      
  </div>  
  </div>)
        }
       
    </Fragment>
)
}