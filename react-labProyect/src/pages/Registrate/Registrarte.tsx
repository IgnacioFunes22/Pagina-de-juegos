import "./Registrarte.css";
import { useNavigate } from "react-router-dom";

function Registrarte() {
  const navigate = useNavigate();

  const enviarFormulario = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // evita recarga

    const formData = new FormData(e.currentTarget);
    const datos = Object.fromEntries(formData);
    const respuesta = await fetch(
      "http://localhost:4000/api/usuario/nuevoUsuario",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      }
    );

    console.log(respuesta);
    if (respuesta) {
      alert("Nuevo usuario registrado ✔️");
      navigate("/");
    } else {
      alert("Hubo un error al registrar el usuario ❌");
    }
  };

  return (
    <div className="registrarBody">
      <main>
        <article className="contenedor">
          <h1 className="titulo">Crea tu Usuario</h1>

          <form id="formulario" onSubmit={enviarFormulario}>
            <label htmlFor="username">
              <p>Usuario</p>
            </label>
            <input type="text" id="username" name="username" required />

            <label htmlFor="email">
              <p>Email</p>
            </label>
            <input type="email" id="email" name="email" required />

            <label htmlFor="password">
              <p>Contraseña</p>
            </label>
            <input type="password" id="password" name="password" required />

            <button className="enviar" type="submit">
              Enviar
            </button>
          </form>
        </article>
      </main>
    </div>
  );
}

export default Registrarte;
