import { crearBotonesJuegos } from "./botonesJuegos.js";
import { crearBotones } from "./masJuegos.js";

export function iniciar(data) {
  const long = data.length;
  crearBotonesJuegos(data.slice(0, 10));

  crearBotones(data, long);
}

export function limpiarBox() {
  const contenedor = document.getElementById("contenedor");
  const box = document.querySelector("#box");

  const botonera = document.getElementById("botonera");
  const celdaBotones = document.getElementById("celdaBotones");

  celdaBotones.removeChild(botonera);
  box.removeChild(contenedor);
}
