import { useEffect, useState } from "react";
import { useFetch } from "../../../hooks/useFetch";
import { GameButton } from "./GameButton/GameButton";
import { selectedGame } from "../../../types/selectedGame";
import { PasarPagina } from "./PasarPagina/PasarPagina";

const urlServer = "http://localhost:4000/etiquetas/api/v1";

type Props = {
  tag: string;
};

function ViewGame({ tag }: Props) {
  const [page, setPage] = useState(1);
  const { data, loading } = useFetch(
    urlServer + "/" + tag + "?page=" + page + "&limit=10"
  );
  const [gameData, setGameData] = useState<selectedGame>();

  useEffect(() => {
    if (data) setGameData(data);
  }, [data]);

  useEffect(() => {
    setPage(1);
  }, [tag]);

  return (
    <>
      {loading && <p> "loading.. "</p>}
      {gameData && <GameButton data={gameData.games} />}
      {gameData && (
        <PasarPagina
          page={gameData.pagina}
          limitPage={gameData.paginas}
          masJuegos={setPage}
        />
      )}
    </>
  );
}

export default ViewGame;
