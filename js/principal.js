const serverURL = 'http://127.0.0.1:5500/';
const itemsPath = 'json/data.json';

window.onload = getData();

const items = document.querySelector('#box');

function getData(){
    fetch(`${serverURL}${itemsPath}`)
    .then((res) => res.json())
    .then((data) => printData(data));
}

function printData(data){
    const itemContainer = document.createElement('div');
    itemContainer.className = 'contenedor';

    data.forEach((item) => {
        itemContainer.innerHTML += createDomElement(item);
        items.append(itemContainer);
    });
}

function createDomElement(item){
    const itemJSON = encodeURIComponent(JSON.stringify(item));
    const itemHtml = `
    <article>
        <button class="juego cargarPagina">
            <img src=${item.portada} class="imgJuego cargarPagina" alt=${item.titulo} onclick="enlazarApagina('${itemJSON}')" />
            ${item.titulo}
        </button>
    </article>`;
    return itemHtml;
}

function enlazarApagina(item) {
   window.open(`paginaJuego.html?item=${item}`, "_self");
}

