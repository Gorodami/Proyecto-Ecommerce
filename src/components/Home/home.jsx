import React from "react";
import '../home.css'
import Search from "../multimedia/search_FILL0_wght400_GRAD0_opsz48.svg"
import {Link} from 'react-router-dom';
import Games from "../Api/games";
import Header from "../Login/header.";
import banner from "../multimedia/banner-hallowen.jpg"




function Home () {
    return(
        <>
        <div>
            <Header/>
        </div>
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
                </section>

                <section className="fondo">
                    <div className="sub-fondo-home">
                        <img className="banner-hallowen" src={banner} alt="" />
                    </div>
                </section>

                <section className="game-fondo">
                    <Games />
                </section>

            </body></>

    )
}

export default Home;