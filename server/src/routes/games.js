const express = require("express");
const router = express.Router();

//json
const itemsJuegos = require("../json/data.json");

// GET ITEMS
router.get("/", (req, res) => {
  res.send(itemsJuegos);
});

// Ruta visible
router.get("/v1/:titulo", (req, res) => {
  const game = itemsJuegos.find((item) => {
    return item.titulo === req.params.titulo;
  });
  res.send(game);
});

module.exports = router;
//end points - req.body
