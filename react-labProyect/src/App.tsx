import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePages/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import Contacto from "./pages/Contacto/Contacto";
import QuienesSomos from "./pages/QuinesSomos/QuienesSomos";
import Registrarte from "./pages/Registrate/Registrarte";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/:nameGame" element={<GamePage />} />
      <Route path="/Contacto" element={<Contacto />} />
      <Route path="/QuinesSomos" element={<QuienesSomos />} />
      <Route path="/Registrarte" element={<Registrarte />} />
    </Routes>
  );
}

export default App;
