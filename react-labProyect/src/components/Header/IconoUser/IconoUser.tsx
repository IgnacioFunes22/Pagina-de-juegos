import "./IconoUser.css";

type Props = {
  nombre: string;
  email: string;
};

function IconoUser({ nombre, email }: Props) {
  return (
    <>
      <div id="iconoUser">
        <img
          src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
          alt="icono de Usuario"
        />
        <div id="usuario">
          <h3>{nombre}</h3>
          <p>{email}</p>
        </div>
      </div>
    </>
  );
}

export default IconoUser;
