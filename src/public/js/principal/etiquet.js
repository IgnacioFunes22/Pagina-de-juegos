import { iniciar, limpiarBox } from "./medio.js";
import { rellenar } from "./rellenar.js";
const dataURL = "http://localhost:4000/api/v1/games/";

export function crearCategorias() {
  const menu = document.getElementById("menu");
  const desplegable = document.getElementById("desplegable");

  menu.addEventListener("mouseenter", () => {
    desplegable.style.display = "block";
  });

  menu.addEventListener("mouseleave", () => {
    desplegable.style.display = "none";
  });

  fetch(`http://localhost:4000/colecciones/v1/etiquetas`)
    .then((res) => res.json())
    .then((colEtiquetas) => rellenarDesplegable(colEtiquetas));
}

async function rellenarDesplegable(colEtiquetas) {
  const desplegable = document.getElementById("desplegable");

  const mostrarT = document.createElement("li");
  mostrarT.textContent = "Todos Los Juegos";
  mostrarT.addEventListener("click", () => {
    window.open("http://localhost:4000/IndieGameReviews", "_self");
  });
  desplegable.appendChild(mostrarT);

  for (const nombreEtiqueta of colEtiquetas) {
    const etiqueta = await buscarData(nombreEtiqueta);
    desplegable.appendChild(etiqueta);
  }
}

async function buscarData(nombreEtiqueta) {
  try {
    const res = await fetch(`${dataURL}${nombreEtiqueta}`);
    const datos = await res.json();
    return crearEtiqueta(datos, nombreEtiqueta);
  } catch (error) {
    console.error("Error al obtener datos:", error);
  }
}

function crearEtiqueta(data, nombreEtiqueta) {
  const etiqueta = document.createElement("li");
  etiqueta.textContent = nombreEtiqueta;
  etiqueta.addEventListener("click", () => {
    limpiarBox();
    iniciar(data);
    const long = data.length;
    if (long < 10) {
      rellenar(10 - long);
    }
  });
  return etiqueta;
}
