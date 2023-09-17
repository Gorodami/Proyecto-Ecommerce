import React from "react";
import '../home.css'
import logo from "../multimedia/logo_steam.svg";
import Banner from "../multimedia/search_FILL0_wght400_GRAD0_opsz48.svg"
import {Link} from 'react-router-dom';
import Games from "../Api/games";



function Home () {
    return(
<div>
        <header className="header-home">
    <section className="nav-sup-home">
        <a  href="#">Instalar Steam</a>
        <Link to="/login">Iniciar sesion</Link>
        <p>Idioma</p>
    </section>

    <div>

    <section className="nav-mid-home">
        <nav className="nav-bar-home">
            <img src={logo} alt="logo-steam"/>
        <div className="nav-tienda">
            <a href="#">Tienda</a>
            <a href="#">Comunidad</a>
            <a href="#">Acerca de</a>
            <a href="#">Soporte</a>
            </div>
    </nav>
    </section>
</div>

</header>

<body>
    <section>
        <div className="menu"> 
         <Link to="#">Tu tienda</Link>
         <Link to="#">Nuevo y destacable</Link>
         <Link to="#">Categorías</Link>
         <Link to="#">Tienda de puntos</Link>
         <Link to="#">Noticias</Link>
         <Link to="#">Laboratorios</Link>
        </div>
        <section className="box">
        <div className="buscar">
            <input type="search" placeholder=" Buscar" />
            <a href="#">
            <img src={Banner} alt=""/>
            </a>
        </div>
        </section>
     </section>
 
     <section className="fondo">
        <div className="sub-fondo-home"></div>
     </section>

        <section>
            <Games/>
        </section>

</body>
</div>
    )
}

export default Home;