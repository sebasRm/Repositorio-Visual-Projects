import React,{Fragment} from "react"
import NavBar from "./Navbar/NavBar"
import { useDispatch, useSelector } from "react-redux";

export const EdicionProyectos =()=>{
    const dispatch = useDispatch();
    const { proyecto}  = useSelector((state) => state);
    console.log(proyecto);

    
    return(
        <Fragment>
                <NavBar/>
                <h3>{proyecto}</h3>
        </Fragment>
        
        
    )

}