import { Link } from "react-router-dom";
import "./Footer.css";

export function Footer() {
  return (
    <footer>
      <p>
        Autores: Tobias Ignacio Funes - Ugarte Cuevas Jorge Luis - Pelozo Danilo
        Agustin
      </p>
      <nav>
        <ul className="nav-links">
          <li>
            <Link to="/QuinesSomos">Quienes somos</Link>
          </li>
          <li>
            <Link to="/Contacto">Contacto</Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}
