import { Link } from "react-router-dom";
import "./Header.css";
import { useState } from "react";
import Loggin from "./Loggin/Login";
import { user } from "../../types/user";
import IconoUser from "./IconoUser/IconoUser";

export function Header() {
  const [mostrarForm, setMostrarForm] = useState(false);
  const [usuario, setUsuario] = useState<user>();

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
          {usuario && (
            <IconoUser nombre={usuario.nombre} email={usuario.email} />
          )}
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
            <Loggin setUser={setUsuario} />
          </div>
        </section>
      </header>
    </>
  );
}
/*  */
