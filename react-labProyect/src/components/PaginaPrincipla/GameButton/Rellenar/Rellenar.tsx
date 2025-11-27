type Props = {
  long: number;
};

export function Rellenar({ long }: Props) {
  return (
    <>
      {Array.from({ length: long }).map((_, i) => (
        <article key={i + 10}>
          <button className="juego" id="sixth">
            <img
              src="https://res.cloudinary.com/dchhrtqvv/image/upload/v1761494069/logo_gaakp2.png"
              className="imgJuego"
              alt="imagen de Indie Game Reviews"
            />
            Indie Game Reviews
            <div className="border"></div>
            <div className="border"></div>
            <div className="border"></div>
            <div className="border"></div>
          </button>
        </article>
      ))}
    </>
  );
}
