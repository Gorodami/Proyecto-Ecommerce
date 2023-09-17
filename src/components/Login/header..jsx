import React from 'react';
import '../../app.css';
import logo_steam from '../multimedia/logo_steam.svg'

function Header(){
    return(
<header className='header'>
    <section className="nav-sup-login">
        <div className="instal">
        <a href="#">Instalar Steam</a>
        </div>
        <a id="ini" href="#">Iniciar sesión</a>
        <a id="barrita" href="#"> | </a>
        <p id="idioma">Idioma</p>
    </section>

    <section className="nav-mid">
        <nav className="nav-bar-login">
            <img src={logo_steam} alt="logo-steam"/>
            <div className="nav-tienda-login">
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