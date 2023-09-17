import React from 'react';
import '../../app.css';
import foto from '../multimedia/footer-login.png'

function Footer(){
    return(
        
<footer>
    <div className="Unete">
        <div className="steam">
        <a href="#">Únete a Steam</a>
        <p id="gratis">Es gratis y fácil de usar</p>
        </div>
        <div className="footer-img">
        <img src={foto} alt="login"/>
        </div>
     <div className="footer-text">
        <p id="unete2">Únete a Steam y descubre </p> 
        <p >miles de títulos a los que </p>
        <p>jugar.</p>
        <div className="info">
        <a href="#" id="masinfo">Más información</a>
        </div>
    </div>
 </div>
</footer>
    )

}

export default Footer;