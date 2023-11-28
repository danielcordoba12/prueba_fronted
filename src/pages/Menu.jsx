import React from "react";
import { Outlet,Link } from "react-router-dom";


export const Menu = () => {
    return (
        <div className="absolute top-0">
            <nav className="bg-slate-600 p-7 gap-x-8 w-screen h-24">
                <ul className="flex space-x-4 text-white">
                    <li >
                        <Link to="/ListarMuestra " className="text-white text-4xl" >Home</Link>
                    </li>
                    <li >
                        <Link to="/Nosotros" className="text-white text-4xl">Nosotros</Link>
                    </li>               
                    <li>
                        <Link to="/RegistrarMuestra" className="text-white text-4xl">Registrar Muestra</Link>
                    </li>
                    <li>
                        <Link to="/Contactenos" className="text-white text-4xl">Contactenos</Link>
                    </li>
                </ul>
            </nav>
            <Outlet/>
        </div>
    ) 
}
