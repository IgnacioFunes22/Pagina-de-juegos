import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import "./Comentarios.css";
import { comentario } from "../../../types/comentario";
import Comentar from "../Comentar/Comentar";
import Eliminar from "./Eliminar/Eliminar";

const serverUrl = "http://localhost:4000/comentarios/api/buscar/";

type Props = {
  gameName: string;
  userName: string;
};

function Comentarios({ gameName, userName }: Props) {
  const [comentarios, setComentarios] = useState<comentario[]>([]);
  const [updateComments, setUdateComments] = useState(false);
  const { data, loading } = useFetch(serverUrl + gameName);

  async function starFech() {
    const controller = new AbortController();
    fetch(serverUrl + gameName, { signal: controller.signal })
      .then((res) => res.json())
      .then((data) => setComentarios(data));
  }

  useEffect(() => {
    if (data) {
      setComentarios(data);
    }
  }, [data]);

  useEffect(() => {
    starFech();
    setUdateComments(!updateComments);
  }, [updateComments]);

  const handleClick = () => setUdateComments(!updateComments);

  return (
    <>
      {loading && <p>Loading...</p>}
      <section>
        <Comentar
          nombreJuego={gameName}
          userName={userName}
          udateComments={handleClick}
        />
      </section>
      <section id="todasOpiniones"></section>
      <h2>Lo que Piensan nuestros Usuarios</h2>
      <section className="opinionesUsuarios">
        <section className="usuario">
          <div id="icono">
            <img
              src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
              alt="icono de Usuario"
            />
            <h3 id="nombreUsuario">PabloXD345</h3>
          </div>
        </section>
        <p>
          Gran Juego 10/10 super recomendadisimo, Alta experiencia jugabilidad
          10/10 historai 10/10 graficos 10/10(Lo mas importante) mejor que GTA6{" "}
        </p>
        {comentarios &&
          comentarios.map((comment) => (
            <>
              <section className="usuario" key={comment.id}>
                <div id="icono">
                  <img
                    src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
                    alt="icono de Usuario"
                  />
                  <h3 id="nombreUsuario">{comment.userName}</h3>
                </div>
                <Eliminar commentId={comment.id} udateComments={handleClick} />
              </section>
              <p>{comment.comment}</p>
            </>
          ))}
      </section>
    </>
  );
}

export default Comentarios;
