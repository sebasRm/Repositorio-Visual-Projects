import React from "react";
import { Fragment } from "react";
import { Component } from "react/cjs/react.production.min";
import Sidebar from './Navbar/Sidebar';

class MenuLider extends Component{
render()
{
    return(
       <Fragment>
           <Sidebar/>
            <h1>Menu de Lider del proyecto</h1>
       </Fragment>
    )
}
}
export default MenuLider