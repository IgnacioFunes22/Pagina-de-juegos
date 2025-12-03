const express = require("express");
const router = express.Router();
const fs = require("fs");

//json
const commentsPath = "src/json/comentarios.json";
const colComentarios = require("../json/comentarios.json");
const colUsuarios = require("../json/usuarios.json");

router.get("/", (req, res) => {
  res.send(colComentarios);
});

router.get("/buscar/:game", (req, res) => {
  const colcommentsAndUser = colComentarios.filter((comment) => {
    return comment.gameName == req.params.game;
  });
  res.send(colcommentsAndUser);
});

router.post("/new", (req, res) => {
  try {
    const data = fs.readFileSync(commentsPath, "utf-8");
    const comentarios = JSON.parse(data);

    const newComment = {
      id: comentarios.length + 1,
      gameName: req.body.gameName,
      userName: req.body.userName,
      comment: req.body.comment,
    };

    comentarios.push(newComment);

    fs.writeFileSync(
      commentsPath,
      JSON.stringify(comentarios, null, 2),
      "utf-8"
    );

    res.send(comentarios.filter((c) => c.gameName === req.body.gameName));
  } catch {
    console.error("Error al añadir comentario");
    res.status(500).send(null);
  }
});

router.delete("/delete", (req, res) => {
  try {
    const data = fs.readFileSync(commentsPath, "utf-8");
    const comentarios = JSON.parse(data);
    const commentId = Number(req.body.commentId);

    const newComentarios = comentarios.filter((comment) => {
      return comment.id !== commentId;
    });

    fs.writeFileSync(
      commentsPath,
      JSON.stringify(newComentarios, null, 2),
      "utf-8"
    );

    res.send(true);
  } catch {
    console.error("Error al eliminar");
    res.status(500).send(null);
  }
});
module.exports = router;
