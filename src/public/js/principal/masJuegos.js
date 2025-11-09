import { rellenar } from "./rellenar.js";
import { crearBotonesJuegos } from "./botonesJuegos.js";

export function crearBotones(data, long) {
  const botonera = document.createElement("section");
  botonera.id = "botonera";
  document.getElementById("celdaBotones").appendChild(botonera);
  const cantBotones = Math.ceil(long / 10);
  var j = 0;

  for (var i = 0; i < cantBotones; i++) {
    var boton = document.createElement("button");
    boton.classList.add("botonCambioPagina");
    boton.textContent = i + 1;
    boton = agregarComportamientoBoton(data, boton, i * 10, long);

    botonera.appendChild(boton);
    j += 10;
  }
}

export function agregarComportamientoBoton(data, boton, i, long) {
  const items = document.querySelector("#box");

  boton.addEventListener("click", () => {
    var contenedor = document.getElementById("contenedor");
    items.removeChild(contenedor);
    crearBotonesJuegos(data.slice(i, i + 10));
    if (i + 10 > long) {
      rellenar(i + 10 - long);
    }
  });
  return boton;
}
