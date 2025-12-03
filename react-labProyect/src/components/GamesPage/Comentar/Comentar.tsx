import "./Comentar.css";
import { comentario } from "../../../types/comentario";

type Props = {
  nombreJuego: string;
  userName: string;
  addComentario: (comments: comentario[]) => void;
};

function Comentar({ nombreJuego, userName, addComentario }: Props) {
  const sendComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // evita recarga

    const formData = new FormData(e.currentTarget);
    const datos = Object.fromEntries(formData);

    datos.gameName = nombreJuego;
    datos.userName = userName;

    const respuesta = await fetch("http://localhost:4000/comentarios/api/new", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    const comentarios = await respuesta.json();

    if (respuesta) {
      addComentario(comentarios);
    } else {
      alert("Hubo un error al agrego un nuevo comentario ❌");
    }
  };

  return (
    <>
      <form className="comBox" onSubmit={sendComment}>
        <label htmlFor="comentarios">
          <h2 className="opinio">Dejanos Tu Opinion sobre este Videojuego</h2>
        </label>
        <textarea
          id="comment"
          name="comment"
          placeholder="Escribe tu opinion..."
        ></textarea>
        <button type="submit" id="enviar">
          Enviar
        </button>
      </form>
    </>
  );
}

export default Comentar;
