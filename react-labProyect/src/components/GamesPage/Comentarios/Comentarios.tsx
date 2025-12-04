import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import "./Comentarios.css";
import { comentario } from "../../../types/comentario";
import Comentar from "../Comentar/Comentar";
import Eliminar from "./Eliminar/Eliminar";
import { user } from "../../../types/user";

const serverUrl = "http://localhost:4000/comentarios/api/buscar/";

type Props = {
  gameName: string;
};

function Comentarios({ gameName }: Props) {
  const [comentarios, setComentarios] = useState<comentario[]>([]);
  const [user, setUser] = useState<user | null>(null);

  const { data, loading } = useFetch(serverUrl + gameName);

  useEffect(() => {
    if (data) {
      setComentarios(data);
    }
  }, [data]);

  const handleAddComentario = (comments: comentario[]) => {
    setComentarios(comments);
  };

  const handleDeleteComentario = (id: number) => {
    setComentarios(comentarios.filter((comment) => comment.id !== id));
  };

  return (
    <>
      {loading && <p>Loading...</p>}
      <section>
        <Comentar
          nombreJuego={gameName}
          addComentario={handleAddComentario}
          setUser={setUser}
          user={user}
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
          Gran Juego 10/10 super recomendadisimo, Alta experiencia gato,
          jugabilidad 10/10 historia 10/10 graficos 10/10(Lo mas importante)
          mejor que GTA6{" "}
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
                {user?.username === comment.userName && (
                  <Eliminar
                    commentId={comment.id}
                    userName={comment.userName}
                    deleteComentario={handleDeleteComentario}
                  />
                )}
              </section>
              <p>{comment.comment}</p>
            </>
          ))}
      </section>
    </>
  );
}

export default Comentarios;
