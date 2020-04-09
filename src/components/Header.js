import React from 'react'
import '../assets/styles/Header.css'
import Logo from '../assets/statics/epetslogo.png'

const Header = () => (
    <header>
        <img className="logo" src={Logo} />
        <nav>
            <ul className="nav-links">
            <li>Juguetes</li>
            <li>Comida</li>
            <li>Ropa</li>
            <li>Estetica</li>
            <li>Consulta Medica</li>
        </ul> 
        </nav>
        
    </header>
)

export default Header
