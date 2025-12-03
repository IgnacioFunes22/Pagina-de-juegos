import "./GamePage.css";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { game } from "../../types/game";
import Titulo from "../../components/GamesPage/Titulo/Titulo";
import { Header } from "../../components/Header/Header";
import { Footer } from "../../components/Footer/Footer";
import Album from "../../components/GamesPage/Album/Album";
import Descripcion from "../../components/GamesPage/Descripcion/Descripcion";
import Comentarios from "../../components/GamesPage/Comentarios/Comentarios";

const serverUrl = "http://localhost:4000/games/api/v1/";

function GamePage() {
  const [gameData, setGameData] = useState<game>();
  const nameGame = useParams().nameGame;
  const { data, loading } = useFetch(serverUrl + nameGame);

  useEffect(() => {
    if (data) {
      setGameData(data);
    }
  }, [data]);

  return (
    <div className="Game-Page">
      <Header />
      <div className="wrapper">
        {loading && "Cargando.."}
        <main className="GameMain">
          <div className="mainContent">
            {gameData && <Titulo titulo={gameData.titulo} />}
            <article className="section1">
              {gameData && (
                <article className="section1-1" id="section1-1">
                  <Album
                    imagenes={gameData.imagenes}
                    titulo={gameData.titulo}
                  />
                  <div className="adicional">
                    <p>{"Precio: " + gameData.precio}</p>
                    <p>{"Clasificasion: " + gameData.clasificacion}</p>
                    <p>{"Desarollado por: " + gameData.desarrollador}</p>
                  </div>
                </article>
              )}
              <article className="section1-2" id="section1-2">
                {gameData && <Descripcion data={gameData} />}
              </article>
            </article>
            <article className="section2" id="section2">
              <p>Donde comprar: </p>
              {gameData &&
                Array.from({ length: gameData.links.length }).map((_, i) => (
                  <a key={i} href={"" + gameData.links[i]}>
                    {gameData.tiendas[i]}{" "}
                  </a>
                ))}
            </article>
            <article>
              {nameGame && (
                <Comentarios gameName={nameGame} userName="Anonimus" />
              )}
            </article>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default GamePage;
