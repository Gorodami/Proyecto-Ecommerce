import React from "react";
import './home.css'
import logo from "../components/multimedia/logo_steam.svg";
import Banner from "../components/multimedia/search_FILL0_wght400_GRAD0_opsz48.svg"
import {Link} from 'react-router-dom';


function Home () {
    return(
<div>
        <header>
    <section className="nav-sup">
        <a  href="#">Instalar Steam</a>
        <Link to="/login">Iniciar sesion</Link>
        <p>Idioma</p>
    </section>

    <div>

    <section className="nav-mid">
        <nav className="nav-bar">
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
        <div className="sub-fondo"></div>
     </section>

     <section className="overflow">
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (1).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (2).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (3).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (4).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (5).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (6).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (7).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (8).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (9).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (10).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (11).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (12).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (13).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (14).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (15).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (16).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (17).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (18).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule (19).jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule_spanish.jpg" alt=""/>
            </a>
        </article>
        <article className="articulos">
            <a href="#">
                <img src="multimedia/hero_capsule.jpg" alt=""/>
            </a>
        </article>
     </section>

</body>
</div>
    )
}

export default Home;