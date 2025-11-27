import { game } from "../../../types/game";
import "./Descripcion.css";

type Props = {
  data: game;
};

function Descripcion({ data }: Props) {
  return (
    <>
      <p>{data.descripcion1}</p>
      <img src={data.imgTexto} alt={data.titulo} className="imgTexto" />
      <p>{data.descripcion2}</p>
      <div className="adicional">
        <ul>
          <li>{"Genero: " + data.genero}</li>
          <li>{"Fecha de Lanzamiento" + data.fecha_lanzamiento}</li>
        </ul>
        <ul>
          <li>{"Plataforma: " + data.plataforma}</li>
          <li>
            {data.multijugador ? "Tiene Multijugador" : "No Tiene Multijugador"}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Descripcion;
