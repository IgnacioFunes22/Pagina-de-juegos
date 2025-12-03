const express = require("express");
const router = express.Router();
const fs = require("fs");

const path = require("path");
const usuariosPath = path.join(__dirname, "../json/usuarios.json");
const colUsuarios = require("../json/usuarios.json");

router.get("/v1/registrarse", (req, res) => {
  res.render("registrarUsuario");
});

router.post("/login", (req, res) => {
  try {
    const { username, password } = req.body;

    const rawData = fs.readFileSync(usuariosPath, "utf-8");
    const usuarios = JSON.parse(rawData);

    const usuario = usuarios.find(
      (user) =>
        user.nombre.toLowerCase() === username.toLowerCase() &&
        user.contraseña === password
    );

    if (!usuario) {
      return res.json(null);
    }

    res.json({
      username: usuario.nombre,
      email: usuario.email,
      id: usuario.id,
    });
  } catch (err) {
    console.error("Error en /login:", err);
    res.status(500).json(null);
  }
});

// POST para guardar un nuevo usuario
router.post("/nuevoUsuario", (req, res) => {
  try {
    const data = fs.readFileSync(usuariosPath, "utf-8");
    const usuarios = JSON.parse(data);

    const newUsuario = {
      id: usuarios.length + 1,
      nombre: req.body.username,
      email: req.body.email,
      contraseña: req.body.password,
    };
    console.log("Body: " + req.body);
    usuarios.push(newUsuario);
    console.log("col: " + usuarios);

    fs.writeFileSync(usuariosPath, JSON.stringify(usuarios, null, 2), "utf-8");

    res.json(true);
  } catch {
    console.error("Error al añadir usuario");
    res.status(500).send(null);
  }
});

module.exports = router;
