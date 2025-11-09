const express = require("express");
const router = express.Router();

const colEtiquetas = require("../json/etiquetas.json");

router.get("/v1/etiquetas", (req, res) => {
  res.send(colEtiquetas.etiquetas);
});

module.exports = router;
