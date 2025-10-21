const params = new URLSearchParams(window.location.search);
const itemCodificado = params.get("item");
const item = JSON.parse(decodeURIComponent(itemCodificado));

const titulo = document.createElement('h1');
const nodeTi = document.createTextNode(`${item.titulo}`);

titulo.appendChild(nodeTi);
document.getElementById("encabezado").appendChild(titulo);

const imgSliderP = document.createElement('img');
imgSliderP.src = item.imagenes[0];
imgSliderP.id = "imagen";
imgSliderP.alt = item.titulo;
document.getElementById("sliderPrincipal").appendChild(imgSliderP)

item.imagenes.forEach((imgen) => {
    const celda = document.createElement('div');
    celda.classList.add("Celda");

    const imgCelda = document.createElement('img');
    imgCelda.src = imgen;
    imgCelda.classList.add("visual");

    celda.appendChild(imgCelda);
    document.getElementById("selctor").appendChild(celda);
});


const selectorSlider = document.querySelectorAll(".visual");

selectorSlider.forEach((imagen) => {
imagen.addEventListener("click", () => {
    document.getElementById("imagen").src = imagen.src;
});
});

const text1 = document.createElement('p');
const imgText = document.createElement('img');
const text2 = document.createElement('p');

text1.textContent = item.descripcion1;
imgText.src = item.imgTexto;
imgText.classList.add("imgTexto");
text2.textContent = item.descripcion2;

document.getElementById("section1-2").appendChild(text1);
document.getElementById("section1-2").appendChild(imgText);
document.getElementById("section1-2").appendChild(text2);

const precio = document.createElement('p');
const clasificacion = document.createElement('p');
const desarrollador = document.createElement('p');

precio.textContent = "Precio: " + item.precio;
clasificacion.textContent = "Clasificacion: " + item.clasificacion;
desarrollador.textContent = "Desarollado por: " + item.desarrollador;

const subNodo = document.createElement('div');
subNodo.classList.add("adicional");

subNodo.appendChild(precio);
subNodo.appendChild(clasificacion);
subNodo.appendChild(desarrollador);

document.getElementById("section1-1").appendChild(subNodo);

const lista1 = document.createElement('ul');
const lista2 = document.createElement('ul');

const ele1 = document.createElement('li');
const ele2 = document.createElement('li');
const ele3 = document.createElement('li');
const ele4 = document.createElement('li');

ele1.textContent = "Genero " + item.genero;
ele2.textContent = "Plataforma " + item.plataforma;
ele3.textContent = "Fecha de lanzamiento " + item.fecha_lanzamiento;
if (item.multijugador) {
    ele4.textContent = "Tiene Multijugador";
} else {
    ele4.textContent = "No Tiene Multijugador";
}

lista1.appendChild(ele1);
lista1.appendChild(ele3);

lista2.appendChild(ele2);
lista2.appendChild(ele4);

const subNodo2 = document.createElement('div');
subNodo2.classList.add("adicional");
subNodo2.appendChild(lista1);
subNodo2.appendChild(lista2);

document.getElementById("section1-2").appendChild(subNodo2);

let i = 0;
item.links.forEach(link => {
    try {
        const enlace = document.createElement('a');
        enlace.href = link;
        enlace.textContent = item.tiendas[i];
        enlace.target = "_blank";

        document.getElementById("section2").appendChild(enlace);
        i++;
    } catch (error) {
        console.log("Fatal Error");
    }
})
