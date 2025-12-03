import { useState } from "react";
import "./HomePage.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { Etiquetas } from "../../components/PaginaPrincipal/Etiquetas/Etiquetas";
import ViewGame from "../../components/PaginaPrincipal/ViewGame/ViewGame";

function HomePage() {
  const [tag, setTag] = useState<string>("all");

  return (
    <div className="home-page">
      <Header />
      <main className="HomeMain">
        <section>
          <Etiquetas onClick={setTag} />
        </section>
        <section>
          <h1 id="Titulo">Nuestras Reseñas</h1>
          <ViewGame tag={tag} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
