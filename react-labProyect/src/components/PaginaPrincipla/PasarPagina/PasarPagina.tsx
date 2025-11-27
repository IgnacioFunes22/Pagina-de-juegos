import "./PasarPagina.css";

type Props = {
  cantidad: number;
  masJuegos: (ininicio: number) => void;
};

export function PasarPagina({ cantidad, masJuegos }: Props) {
  return (
    <section id="celdaBotones">
      {Array.from({ length: cantidad }).map((_, i) => (
        <button
          key={i}
          className="botonCambioPagina"
          onClick={() => masJuegos(i * 10)}
        >
          {i}
        </button>
      ))}
    </section>
  );
}
