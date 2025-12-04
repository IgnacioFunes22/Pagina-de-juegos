import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import Loggin from "./Loggin/Login";

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
            <Loggin onClick={handleClick} />
          </div>
        </section>
      </header>
    </>
  );
}
/*  */
