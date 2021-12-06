import React from "react";
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom'
import * as FaIcons from'react-icons/fa'
import * as AiIcons from'react-icons/ai'
import * as IoIcons from'react-icons/io'
import * as RiIcons from'react-icons/ri'
import { IconContext } from "react-icons";
import {Link} from 'react-router-dom'


import Perfil from '../Perfil';
import Sesion from '../Sesion';
import MenuCoordinador from '../MenuCoordinador';
import MenuLider from '../MenuLider'

import CerrarSesion from './CerrarSesion';


export const SidebarData =[
  
    {
        title:'inicio',
        path:'/MenuCoordinador',
        icon:<AiIcons.AiFillHome/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,

        subNav:[ 
            {
                title:'Proyectos',
                path:'/Proyectos',
                icon:<IoIcons.IoMdPeople/>,
            },
        ]
    },
    {
        title:'Cuenta',
        path:"/Perfil",
        icon:<IoIcons.IoMdPeople/>,
        iconClosed:<RiIcons.RiArrowDownSFill/>,
        iconOpened:<RiIcons.RiArrowUpSFill/>,

        subNav:[ 
            {
                title:'Cerrar Sesion',
                path:'/CerrarSesion',
                icon:<IoIcons.IoMdPeople/>,
            },
        ]

    }
]
