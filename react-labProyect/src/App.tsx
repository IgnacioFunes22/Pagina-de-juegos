import { Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePages/HomePage";
import GamePage from "./pages/GamePage/GamePage";
import Contacto from "./pages/Contacto/Contacto";
import QuienesSomos from "./pages/QuinesSomos/QuienesSomos";
import Registrarte from "./pages/Registrate/Registrarte";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import "./App.css";

function App() {
  const location = useLocation();

  const getBackgroundClass = () => {
    if (location.pathname === "/") return "bg-home";
    if (
      /^\/[^/]+$/.test(location.pathname) &&
      !location.pathname.startsWith("/Contacto") &&
      !location.pathname.startsWith("/QuinesSomos")
    )
      return "bg-game";
    if (location.pathname.startsWith("/Registrarte")) return "bg-home";
    return "bg-contacto";
  };

  return (
    <div className={`layout ${getBackgroundClass()}`}>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} action />
        <Route path="/:nameGame" element={<GamePage />} />
        <Route path="/Contacto" element={<Contacto />} />
        <Route path="/QuinesSomos" element={<QuienesSomos />} />
        <Route path="/Registrarte" element={<Registrarte />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
