import "./IconoUser.css";

type Props = {
  nombre: string;
  email: string;
  onClick: () => void;
};

function IconoUser({ nombre, email, onClick }: Props) {
  const handleClick = () => {
    sessionStorage.clear();
    onClick();
  };

  return (
    <>
      <div id="iconoUser">
        <div className="userImg">
          <img
            src="https://cdn-icons-png.flaticon.com/512/456/456212.png"
            alt="icono de Usuario"
          />
        </div>
        <div id="usuario">
          <h3>{nombre}</h3>
          <p>{email}</p>
        </div>
        <div>
          <button className="cerrarSecion" onClick={() => handleClick()}>
            <p>x</p>
          </button>
        </div>
      </div>
    </>
  );
}

export default IconoUser;
