import { useState, useEffect } from "react";
import "./HomePage.css";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import { GameButton } from "../../components/PaginaPrincipla/GameButton/GameButton";
import { PasarPagina } from "../../components/PaginaPrincipla/PasarPagina/PasarPagina";
import { Etiquetas } from "../../components/PaginaPrincipla/Etiquetas/Etiquetas";
import { game } from "../../types/game";
import { useFetch } from "../../hooks/useFetch";

const serverUrl = "http://localhost:4000/games/api/";

function HomePage() {
  const { data, loading } = useFetch(serverUrl);
  const [backendData, setData] = useState<game[]>([]);
  const [ininicio, setInicio] = useState(0);
  const [restoreAll, setRestoreAll] = useState(false);

  useEffect(() => {
    if (data) {
      setData(data);
    }
  }, [restoreAll, data]);

  const handleClick = () => setRestoreAll(!restoreAll);
  return (
    <div className="home-page">
      <Header />
      {loading && <p>Loading...</p>}
      <main className="HomeMain">
        <section>
          <Etiquetas onClick={setData} onClick2={handleClick} />
        </section>
        <section>
          <h1 id="Titulo">Nuestras Reseñas</h1>

          <GameButton data={backendData.slice(ininicio, ininicio + 10)} />
          <PasarPagina
            cantidad={Math.ceil(backendData.length / 10)}
            masJuegos={setInicio}
          />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default HomePage;
