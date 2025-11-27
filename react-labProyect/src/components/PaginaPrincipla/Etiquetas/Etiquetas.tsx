import { useEffect, useState } from "react";
import { game } from "../../../types/game";
import { etiqueta } from "../../../types/etiqueta";
import "./Etiquetas.css";
import { useFetch } from "../../../hooks/useFetch";

type Props = {
  onClick: (data: game[]) => void;
  onClick2: () => void;
};

const serverUrl = "http://localhost:4000/etiquetas/api/";

export function Etiquetas({ onClick, onClick2 }: Props) {
  const [dataArray, setDataArray] = useState<etiqueta[]>([]);
  const [isClicket, setIsClicket] = useState(false);
  const { data, loading } = useFetch(serverUrl);

  useEffect(() => {
    if (data) {
      setDataArray(data);
    }
  }, [data]);

  const handleClick = () => setIsClicket(!isClicket);
  return (
    <aside className="menu">
      {loading && <p>Loading...</p>}
      <div onClick={handleClick}>Categorías</div>
      <ul className={`desplegable ${isClicket ? "mostrar" : "ocultar"}`}>
        <li onClick={() => onClick2()}>
          <p>Todos los Juegos</p>
        </li>

        {/* Render de etiquetas */}
        {dataArray.map((elem) => (
          <li key={elem.nombreEtiqueta} onClick={() => onClick(elem.data)}>
            <p>{elem.nombreEtiqueta}</p>
          </li>
        ))}
      </ul>
    </aside>
  );
}
