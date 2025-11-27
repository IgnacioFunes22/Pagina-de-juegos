const express = require("express");
const router = express.Router();

const itemsJuegos = require("../json/data.json");
const colEtiquetas = require("../json/etiquetas.json");

router.get("/", (req, res) => {
  const colGameAndTag = [];
  colEtiquetas.etiquetas.forEach((etiqueta) => {
    const colGames = itemsJuegos.filter((game) => {
      const isIn = game.etiquetas.find((nombre) => {
        return etiqueta === nombre;
      });
      return isIn;
    });
    if (colGames) {
      colGameAndTag.push({ nombreEtiqueta: etiqueta, data: colGames });
    }
  });
  res.send(colGameAndTag);
});

module.exports = router;
