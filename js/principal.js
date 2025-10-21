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
    const long = data.length;

    crearBotonesJuegos(data.slice(0, 10));

    crearBotones(data, long);
}

function crearBotonesJuegos(data) {
    try{
        console.log(data)
        const itemContainer = document.createElement('div');
        itemContainer.className = 'contenedor';
        itemContainer.id = "contenedor";

        data.forEach((item) => {
            itemContainer.innerHTML += createDomElement(item);
            items.append(itemContainer);
        });
    }catch{
        console.log("Fatal Error", data);
    }
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

function crearBotones(data, long){
    const cantBotones = Math.floor(long / 10);
    var j = 0;

    for(var i = 0; i < cantBotones; i++){
        var boton = document.createElement('button');
        boton.classList.add("botonCambioPagina");
        boton.textContent = i + 1;
        boton = agregarComportamientoBoton(data,boton,i*10);
        
        document.getElementById('celdaBotones').appendChild(boton);
        j += 10;
    }
}

function agregarComportamientoBoton(data, boton, i) {
    boton.addEventListener("click", () =>{
        var contenedor = document.getElementById('contenedor');
        items.removeChild(contenedor);
        crearBotonesJuegos(data.slice(i, i + 10));
    });
    return boton;
}


