import { useEffect, useState } from "react";
import "./Etiquetas.css";
import { useFetch } from "../../../hooks/useFetch";
import { colEtiqueta } from "../../../types/colEtiqueta";

type Props = {
  onClick: (tag: string) => void;
};

const serverUrl = "http://localhost:4000/etiquetas/api/";

export function Etiquetas({ onClick }: Props) {
  const [dataArray, setDataArray] = useState<colEtiqueta>();
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
        <li onClick={() => onClick("all")}>
          <p>Todos los Juegos</p>
        </li>

        {/* Render de etiquetas */}
        {dataArray &&
          dataArray.etiquetas.map((etiqueta: string) => (
            <li key={etiqueta} onClick={() => onClick(etiqueta)}>
              <p>{etiqueta}</p>
            </li>
          ))}
      </ul>
    </aside>
  );
}
