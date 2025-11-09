export function crearBotonesJuegos(data) {
  const items = document.querySelector("#box");

  try {
    const itemContainer = document.createElement("div");
    itemContainer.className = "contenedor";
    itemContainer.id = "contenedor";

    data.forEach((item) => {
      itemContainer.innerHTML += createDomElement(item);
      items.append(itemContainer);
    });
  } catch {
    console.log("Fatal Error", data);
  }
}

export function createDomElement(item) {
  const itemHtml = `
    <article>
      <button class="juego" onclick="window.open('http://localhost:4000/IndieGameReviews/${item.titulo}', '_self')">
          <img src=${item.portada} class="imgJuego" alt=${item.titulo} />
          ${item.titulo}
      </button>
    </article>`;
  return itemHtml;
}
