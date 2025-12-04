import { useState } from "react";
import "./Login.css";
import { user } from "../../../types/user";
import IconoUser from "../IconoUser/IconoUser";

type Props = {
  onClick: () => void;
};

function Loggin({ onClick }: Props) {
  const [mostrarIcono, setIcono] = useState(false);
  const [usuario, setUsuario] = useState<user>();

  const serchUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // evita recarga

    const formData = new FormData(e.currentTarget);
    const datos = Object.fromEntries(formData);

    const respuesta = await fetch("http://localhost:4000/api/usuario/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(datos),
    });

    if (respuesta.ok) {
      const userData = await respuesta.json(); // ← acá está tu usuario
      console.log("JSON recibido:", userData);

      sessionStorage.setItem("usuario", JSON.stringify(userData));
      setUsuario(userData);

      setIcono(!mostrarIcono);
    } else {
      alert("Hubo un error al registrar el usuario ❌");
    }
  };

  const handleClick = () => {
    onClick();
    setIcono(!mostrarIcono);
  };

  return (
    <>
      {usuario && mostrarIcono && (
        <IconoUser
          nombre={usuario.username}
          email={usuario.email}
          onClick={() => handleClick()}
        />
      )}
      <div className={mostrarIcono ? "logginOff" : "logginOn"}>
        <h3 className="tituloLogin">Iniciar sesion</h3>
        <form id="formulario" onSubmit={serchUser}>
          <label htmlFor="username">
            <p>Nombre de Usuario</p>
          </label>
          <input type="text" id="username" name="username" required />
          <label htmlFor="password">
            <p>Contraseña</p>
          </label>
          <input type="password" id="password" name="password" required />
          <button className="enviar" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default Loggin;
