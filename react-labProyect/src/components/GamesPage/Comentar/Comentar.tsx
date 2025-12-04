import "./Comentar.css";
import { comentario } from "../../../types/comentario";
import { user } from "../../../types/user";

type Props = {
  nombreJuego: string;
  setUser: (user: user | null) => void;
  addComentario: (comments: comentario[]) => void;
  user: user | null;
};

function Comentar({ nombreJuego, addComentario, setUser, user }: Props) {
  const sendComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // evita recarga

    if (user) {
      const formData = new FormData(e.currentTarget);
      const datos = Object.fromEntries(formData);

      datos.gameName = nombreJuego;
      datos.userName = user.username;

      const respuesta = await fetch(
        "http://localhost:4000/comentarios/api/new",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(datos),
        }
      );

      const comentarios = await respuesta.json();

      if (respuesta) {
        addComentario(comentarios);
      } else {
        alert("Hubo un error al agrego un nuevo comentario ❌");
      }
    } else {
      alert("Debe inisiar secion para poder comentar");
    }
  };

  const handleClick = () => {
    const usuario = sessionStorage.getItem("usuario");
    setUser(usuario ? JSON.parse(usuario) : null);
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
        <button type="submit" id="enviar" onClick={() => handleClick()}>
          Enviar
        </button>
      </form>
    </>
  );
}

export default Comentar;
