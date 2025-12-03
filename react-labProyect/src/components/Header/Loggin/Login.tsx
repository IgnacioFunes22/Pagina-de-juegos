import { useState } from "react";
import "./Login.css";
import { user } from "../../../types/user";

type Props = {
  setUser: (usuario: user) => void;
};

function Loggin({ setUser }: Props) {
  const [mostrarIcono, setIcono] = useState(false);

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
      setUser(userData);

      handleClick(!mostrarIcono);
    } else {
      alert("Hubo un error al registrar el usuario ❌");
    }
  };

  const handleClick = (val: boolean) => setIcono(val);

  return (
    <>
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
