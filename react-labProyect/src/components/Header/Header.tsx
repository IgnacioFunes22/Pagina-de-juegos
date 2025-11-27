import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";

export function Header() {
  const [mostrarForm, setMostrarForm] = useState(false);

  const handleClick = () => setMostrarForm(!mostrarForm);
  return (
    <>
      <header>
        <section>
          <div className="logo">
            <Link to="/">
              <img
                src="https://res.cloudinary.com/dchhrtqvv/image/upload/v1761494069/logo_gaakp2.png"
                alt="logo_del_sitio"
              />
            </Link>
          </div>
        </section>
        <section className="derecha">
          <nav>
            <ul className="nav-links">
              <li>
                <Link to="/">Inicio</Link>
              </li>
              <li id="registrarse">
                <Link to="/Registrarte">Registrate</Link>
              </li>
              <li>
                <p
                  className={`${mostrarForm ? "logginOff" : "logginOn"}`}
                  onClick={() => handleClick()}
                >
                  Iniciar sesion
                </p>
              </li>
            </ul>
          </nav>
          <div className={`${mostrarForm ? "logginOn" : "logginOff"}`}>
            <h3 className="tituloLogin">Iniciar sesion</h3>
            <form id="formulario">
              <label htmlFor="username">
                <p>Nombre de Usuario</p>
              </label>
              <input type="text" id="username" name="username" required />
              <label htmlFor="password">
                <p>Contraseña</p>
              </label>
              <input type="password" id="password" name="password" required />
              <button
                className="enviar"
                type="submit"
                onClick={() => handleClick()}
              >
                Enviar
              </button>
            </form>
          </div>
        </section>
      </header>
    </>
  );
}

/*
<div logginOff>
    <h6 className="tituloLogin">Iniciar sesion</h6>
    <form id="formulario">
            <label for="username"><p>Nombre de Usuario</p></label>
            <input type="text" id="username" name="username" required>
            <label for="password"><p>Contraseña</p></label>
            <input type="password" id="password" name="password" required>
            <button className="enviar" type="submit">Enviar</button>
    </form>
</div>
*/
