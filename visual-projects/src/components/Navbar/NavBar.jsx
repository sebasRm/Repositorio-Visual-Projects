import React,{useState} from "react";
import { Link } from "react-router-dom";
import LogoVisual from "../../assets/img/logo.png";
import iconoUsuario from "../../assets/img/directivo.png"
import "../../assets/css/SubMenu.css"
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from '../../helpers/NavbarElements';
  import { Dropdown, DropdownToggle,DropdownMenu,DropdownItem } from "reactstrap";
import { render } from "@testing-library/react";

 const NavBar = () => {
  
  let usuario =JSON.parse(sessionStorage.getItem('usuarioActivo'));
  const[dropdown,setDropdown]= useState(false);



  const toggelDropdown =()=>{
    setDropdown(!dropdown);
  }

  return (

    <>
     <Nav>
        <NavLink to='/MenuCoordinador'>
          <img src={LogoVisual} className="logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink className="item" to='/about' activeStyle>
           Inicio
          </NavLink>
          <NavLink to='/services' activeStyle>
            Proyectos
          </NavLink>
          <NavLink to='/contact-us' activeStyle>
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' activeStyle>
            Sign Up
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>

         
      <Dropdown  isOpen={dropdown} toggle={toggelDropdown}>
           <DropdownToggle style={{background:'#0b2dc4', border:0, width:'12rem'}} className="dropdown_user" >
            <div className="row">
               
           <div className="col-xs-12 col-sm-12  col-md-12 col-lg-4">
           {usuario.map(usuario => <div>{usuario.nombres+" "}{usuario.apellidos}</div>,)} 
           </div>
           <div className="col-xs-12 col-sm-12  col-md-12 col-lg-3">
           <img className="usuario" src={iconoUsuario} alt="user"/>
          
           </div> 
           </div>   
             </DropdownToggle>
              <DropdownMenu>
              <DropdownItem>
                Perfil usuario
                </DropdownItem>
                <DropdownItem>
                Nombres:{usuario.map(usuario => <div>{usuario.nombres+" "}{usuario.apellidos}</div>,)} 
                </DropdownItem>
                <DropdownItem>
                Correo:{usuario.map(usuario => <div>{usuario.correo}</div>)}    
                </DropdownItem>

                <DropdownItem>
                Rol:{usuario.map(usuario => <div>{usuario.rol}</div>)}    
                </DropdownItem> 

                <DropdownItem>
                    <NavBtn>
                      <NavBtnLink to='/CerrarSesion'>Cerrar sesión</NavBtnLink>
                    </NavBtn>
                </DropdownItem>
              </DropdownMenu>
               
           </Dropdown>
        
       
    
      </Nav>

    </>
  );
}
export default NavBar;
