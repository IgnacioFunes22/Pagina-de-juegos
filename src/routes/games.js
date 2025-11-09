const express = require("express");
const router = express.Router();

//json
const itemsJuegos = require("../json/data.json");

// GET ITEMS
router.get("/", (req, res) => {
  res.send(itemsJuegos);
});

// Ruta visible
router.get("/:etiqueta", (req, res) => {
  const colJuegos = itemsJuegos.filter((item) => {
    const retornar = item.etiquetas.find((estiquet) => {
      return estiquet === req.params.etiqueta;
    });
    return retornar != null;
  });
  res.send(colJuegos);
});

module.exports = router;
//end points - req.body
