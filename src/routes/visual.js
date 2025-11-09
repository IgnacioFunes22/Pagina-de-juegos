const express = require("express");
const router = express.Router();

//json
const itemsJuegos = require("../json/data.json");

// Ruta visible
router.get("/:titulo", (req, res) => {
  const gameFound = itemsJuegos.find(function (item) {
    return item.titulo === req.params.titulo;
  });
  if (gameFound != null) {
    res.render("pagJuegos", { gameData: gameFound });
  } else {
    res.status(404).send("ERROR 404 No se encontro la pagina");
  }
});

router.get("/", (req, res) => {
  res.render("principal");
});

module.exports = router;
//end points - req.body
