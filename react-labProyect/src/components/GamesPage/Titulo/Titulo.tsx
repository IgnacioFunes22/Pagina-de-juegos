import "./Titulo.css";

type Props = {
  titulo: string;
};

function Titulo({ titulo }: Props) {
  return (
    <article className="encabezado">
      <h1>{titulo}</h1>
    </article>
  );
}

export default Titulo;
