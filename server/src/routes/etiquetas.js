const express = require("express");
const router = express.Router();

const itemsJuegos = require("../json/data.json");
const colEtiquetas = require("../json/etiquetas.json");

router.get("/", (req, res) => {
  try {
    res.json(colEtiquetas);
  } catch (error) {
    console.error("Error al obtener datos:", error);
    res.status(500).json([]);
  }
});

router.get("/v1/:titulo", (req, res) => {
  try {
    const titulo = req.params.titulo;
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;

    let juegosFiltrados =
      titulo === "all"
        ? itemsJuegos
        : itemsJuegos.filter((game) => game.etiquetas.includes(titulo));

    const total = juegosFiltrados.length;
    const paginas = Math.ceil(total / limit);

    const start = (page - 1) * limit;
    const end = start + limit;

    const games = juegosFiltrados.slice(start, end);

    res.json({
      games,
      pagina: page,
      paginas,
      total,
    });
  } catch (error) {
    console.error("Error al obtener datos de juegos:", error);
    res.status(500).json(null);
  }
});

module.exports = router;
