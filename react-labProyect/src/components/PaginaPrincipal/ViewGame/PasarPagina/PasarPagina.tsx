import "./PasarPagina.css";

type Props = {
  page: number;
  limitPage: number;
  masJuegos: (page: number) => void;
};

export function PasarPagina({ page, limitPage, masJuegos }: Props) {
  return (
    <section id="celdaBotones">
      {page !== 1 && (
        <button className="botonCambioPagina" onClick={() => masJuegos(1)}>
          {1}
        </button>
      )}
      {page - 1 > 1 && (
        <button
          className="botonCambioPagina"
          onClick={() => masJuegos(page - 1)}
        >
          {page - 1}
        </button>
      )}
      <button className="botonCambioPagina" onClick={() => masJuegos(page)}>
        {page}
      </button>
      {limitPage > page + 1 && (
        <button
          className="botonCambioPagina"
          onClick={() => masJuegos(page + 1)}
        >
          {page + 1}
        </button>
      )}

      {limitPage > page + 1 && <p>....</p>}

      {limitPage > page && (
        <button
          className="botonCambioPagina"
          onClick={() => masJuegos(limitPage)}
        >
          {limitPage}
        </button>
      )}
    </section>
  );
}
