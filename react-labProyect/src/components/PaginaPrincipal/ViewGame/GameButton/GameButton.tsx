import { game } from "../../../../types/game";
import { Rellenar } from "./Rellenar/Rellenar";
import "./GameButton.css";
import { Link } from "react-router-dom";

type Props = {
  data: game[];
};

export function GameButton({ data }: Props) {
  const longitud = data.length;

  return (
    <div id="contenedor" className="contenedor">
      {data.map((item) => (
        <article key={item._id}>
          <Link to={"/" + item.titulo}>
            <button className="juego">
              <img src={item.portada} className="imgJuego" alt={item.titulo} />
              {item.titulo}
              <div className="border"></div>
              <div className="border"></div>
              <div className="border"></div>
              <div className="border"></div>
            </button>
          </Link>
        </article>
      ))}

      {longitud < 10 && <Rellenar long={10 - longitud} />}
    </div>
  );
}
