import React from "react";
import '../App.css'


function Main(){
    return(
        
<body>

 <section className="fondo-login">
    <main className="sub-fondo-login">
        <div className="title">
        <h1>INICIAR SESIÓN</h1>
        </div>
        <div className="datos">
        <div className="nombre">
            <p>INICAR SESIÓN CON TU NOMBRE DE CUENTA</p>
            <label for="name"></label>
            <input type="text" id="name" name="name"/>
            
        </div>
        <div className="contra">
            <div className="input-contra">
            <p>Contraseña</p>
            <label for="password"></label>
            <input type="password" name="password" id="password"/>
        </div>

    </div>
        <div className="caja">
            <label for="checkbox"></label>
            <input type="checkbox" name="checkbox" id="checkbox"/>
            <p>Recordarme</p>
        </div>

        <div className="boton">
            <button>Iniciar sesión</button>
        </div>

        <div className="ayuda">
            <a href="#">Ayuda, no puedo inicar sesión</a>
        </div>

        <div className="escaneame">
            <p id="nuevo">¡Nuevo!</p>
            <div className="texto">
            <p id="text"> Los usuarios de la apliación </p>
            <p id="text1"> Steam Mobile pueden iniciar </p>
            <p id="text2"> sesión escaneando un código</p>
            <p id="text3"> QR. </p>
            </div>
            <a href="#" id="QR">Ver código QR</a>
            <a href="#" id="info">Más información</a>
        </div>
        </div>
    </main>
 </section>
    

</body>
    )



    

}

export default Main;