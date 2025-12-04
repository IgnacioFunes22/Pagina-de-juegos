import { useState } from "react";
import "./HomePage.css";
import { Etiquetas } from "../../components/PaginaPrincipal/Etiquetas/Etiquetas";
import ViewGame from "../../components/PaginaPrincipal/ViewGame/ViewGame";

function HomePage() {
  const [tag, setTag] = useState<string>("all");

  return (
    <div className="home-page">
      <main className="HomeMain">
        <section>
          <Etiquetas onClick={setTag} />
        </section>
        <section>
          <h1 id="Titulo">Nuestras Reseñas</h1>
          <ViewGame tag={tag} />
        </section>
      </main>
    </div>
  );
}

export default HomePage;
