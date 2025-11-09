const express = require("express");
const router = express.Router();

router.get("/SobreNosotros", (req, res) => {
  res.render("quienesSomos");
});

router.get("/Contactanos", (req, res) => {
  res.render("contacto");
});

module.exports = router;
