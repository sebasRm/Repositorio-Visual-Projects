
import React,{  } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import {Sesion} from './components/Sesion';
import {MenuCoordinador} from './components/Home/MenuCoordinador';
import MenuLider from './components/MenuLider';
import CerrarSesion from './components/Navbar/CerrarSesion';
import {PanelBusquedaAvanzada} from './components/PanelBusquedaAvanzada';
import './assets/css/App.css';
import { Provider, useSelector } from "react-redux";
import { MsalProvider } from '@azure/msal-react';
import {Directores} from './components/Directores';
import {CrearProyectos} from'./components/CrearProyectos'
import { EdicionProyectos } from './components/EdicionProyectos';



function App(){ 
    return( 
        
      
        <Router>
        <div className="App">
        
            <Route path="/" exact component={Sesion}/>   
            <Route path="/MenuCoordinador"  component={MenuCoordinador}/>
            <Route path="/MenuLider" exact component={MenuLider}/> 
            <Route path="/CerrarSesion" exact component={CerrarSesion}/>   
            <Route path="/PanelBusquedaAvanzada" exact component={PanelBusquedaAvanzada}/>   
            <Route path="/Directores" exact component={Directores}/>   
            <Route path="/CrearProyectos" exact component={CrearProyectos}/> 
            <Route path="/EdicionProyectos" exact component={EdicionProyectos}/> 
           
        </div>    
      </Router>   
     
    
    );
}

export default App;