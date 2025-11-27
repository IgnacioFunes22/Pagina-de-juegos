const express = require("express");
const router = express.Router();
const fs = require("fs");

const usuariosPath = "src/json/usuarios.json";

router.get("/v1/registrarse", (req, res) => {
  res.render("registrarUsuario");
});

// GET para buscar el usuario por nombre
router.get("", (req, res) => {
  const { nombre, password } = req.query;

  // Leer y parsear el archivo JSON
  const data = fs.readFileSync(usuariosPath, "utf-8");
  const usuarios = JSON.parse(data);

  // Buscar por nombre (case insensitive)
  const usuario = usuarios.find(
    (user) =>
      user.nombre.toLowerCase() === nombre.toLowerCase() &&
      user.password === password
  );

  if (!usuario) {
    return res.send(null);
  }

  // Mostrar los datos
  res.send(usuario);
});

// POST para guardar un nuevo usuario
router.post("/nuevoUsuario", (req, res) => {
  const data = fs.readFileSync(usuariosPath, "utf-8");
  const usuarios = JSON.parse(data);

  const newUsuario = {
    id: usuarios.length + 1,
    nombre: req.body.username,
    email: req.body.email,
    contraseña: req.body.password,
  };

  usuarios.push(newUsuario);

  fs.writeFileSync(usuariosPath, JSON.stringify(usuarios, null, 2), "utf-8");

  res.post(true);
});

module.exports = router;
