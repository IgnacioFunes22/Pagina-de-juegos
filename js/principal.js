const serverURL = 'http://localhost:4000/';
const itemsPath = 'items/';

window.onload = getData();

const items = document.querySelector('#box');
const celdaBotones = document.querySelector('#celdaBotones');

function getData() {
    fetch(`${serverURL}${itemsPath}`)
        .then((res) => res.json())
        .then((data) => printData(data));
}

function printData(data) {
    iniciar(data);
    crearCategorias(data);
}

function iniciar(data) {
    const long = data.length;
    crearBotonesJuegos(data.slice(0, 10));

    crearBotones(data, long);
}

function crearBotonesJuegos(data) {
    try {
        const itemContainer = document.createElement('div');
        itemContainer.className = 'contenedor';
        itemContainer.id = "contenedor";

        data.forEach((item) => {
            itemContainer.innerHTML += createDomElement(item);
            items.append(itemContainer);
        });
    } catch {
        console.log("Fatal Error", data);
    }
}

function createDomElement(item) {
    const itemJSON = encodeURIComponent(JSON.stringify(item));
    const itemHtml = `
    <article>
        <button class="juego">
            <img src=${item.portada} class="imgJuego" alt=${item.titulo} onclick="enlazarApagina('${itemJSON}')" />
            ${item.titulo}
        </button>
    </article>`;
    return itemHtml;
}

function enlazarApagina(item) {
    window.open(`paginaJuego.html?item=${item}`, "_self");
}

function crearBotones(data, long) {
    const botonera = document.createElement('section');
    botonera.id = "botonera";
    document.getElementById('celdaBotones').appendChild(botonera);
    const cantBotones = Math.ceil(long / 10);
    var j = 0;

    for (var i = 0; i < cantBotones; i++) {
        var boton = document.createElement('button');
        boton.classList.add("botonCambioPagina");
        boton.textContent = i + 1;
        boton = agregarComportamientoBoton(data, boton, i * 10, long);

        botonera.appendChild(boton);
        j += 10;
    }
}

function agregarComportamientoBoton(data, boton, i, long) {
    boton.addEventListener("click", () => {
        var contenedor = document.getElementById('contenedor');
        items.removeChild(contenedor);
        crearBotonesJuegos(data.slice(i, i + 10));
        if ((i + 10) > long) {
            rellenar((i + 10) - long);
        }
    });
    return boton;
}

function rellenar(n) {
    for (let i = 0; i < n; i++) {
        const art = document.createElement('article');
        const relleno = document.createElement('button');
        const imgRelleno = document.createElement('img');

        relleno.classList.add("juego");
        relleno.textContent = "Indie Game Reviews"

        imgRelleno.src = "https://res.cloudinary.com/dchhrtqvv/image/upload/v1761494069/logo_gaakp2.png";
        imgRelleno.classList.add('imgJuego');
        imgRelleno.alt = "imagen de Indie Game Reviews";

        relleno.appendChild(imgRelleno);
        art.appendChild(relleno);
        document.getElementById('contenedor').appendChild(art);
    }
}


const menu = document.getElementById('menu');
const desplegable = document.getElementById('desplegable');

menu.addEventListener('mouseenter', () => {
    desplegable.style.display = 'block';
});

menu.addEventListener('mouseleave', () => {
    desplegable.style.display = 'none';
});
/*
function crearCategorias(data) {
    const desplegable = document.getElementById('desplegable');
    const todasLasEtiquetas = ["open-world", "rpg", "singleplayer"];

    const mostrarTodos = document.createElement('li');
    mostrarTodos.textContent = "Mostrar Todos";
    mostrarTodos.addEventListener("click", () => {
        const contenedor = document.getElementById('contenedor');
        const botonera = document.getElementById('botonera');

        items.removeChild(contenedor);
        celdaBotones.removeChild(botonera);
        iniciar(data);
    })
    desplegable.appendChild(mostrarTodos);
    let subData = null;
    let cuadroEtiqueta = null;
    todasLasEtiquetas.forEach((etiquta) => {
        cuadroEtiqueta = document.createElement('li');
        cuadroEtiqueta.textContent = etiquta;

        subData = discriminarPorEtiqueta(data, etiquta);

        cuadroEtiqueta = comportamientoEtiqueta(cuadroEtiqueta, subData);

        desplegable.appendChild(cuadroEtiqueta);
    });
}

function discriminarPorEtiqueta(data, etiquta) {
    const subData = null;
    data.forEach((item) => {
        let i = 0;
        while (i < item.etiquetas.length) {
            if (item.etiquetas[i] == etiquta) {

            } else {
                subData = item
            }
        }
    })
}

function comportamientoEtiqueta(cuadroEtiqueta, subData, etiquta) {

}*/




