import React from 'react';
import '../App.css';
import logo_steam from './multimedia/logo_steam.svg'

function Header(){
    return(
<header>
    <section className="nav-sup">
        <div className="instal">
        <a href="#">Instalar Steam</a>
        </div>
        <a id="ini" href="#">Iniciar sesión</a>
        <a id="barrita" href="#"> | </a>
        <p id="idioma">Idioma</p>
    </section>

    <section className="nav-mid">
        <nav className="nav-bar">
            <img src={logo_steam} alt="logo-steam"/>
            <div className="nav-tienda">
            <a  id="tienda" href="#">TIENDA</a>
            <a href="#">COMUNIDAD</a>
            <a href="#">ACERCA DE</a>
            <a href="#">SOPORTE</a>
            </div>
    </nav>
    </section>


</header>
    )
}



export default Header;