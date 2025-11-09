import { iniciar } from "./principal/medio.js";
import { crearCategorias } from "./principal/etiquet.js";

document.addEventListener("DOMContentLoaded", async () => {
  const serverURL = "http://localhost:4000/";
  const itemsPath = "api/v1/games/";

  window.onload = getData();

  function getData() {
    fetch(`${serverURL}${itemsPath}`)
      .then((res) => res.json())
      .then((data) => printData(data));
  }

  function printData(data) {
    iniciar(data);
    crearCategorias();
  }
});
