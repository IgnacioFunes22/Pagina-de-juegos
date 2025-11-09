export function rellenar(n) {
  for (let i = 0; i < n; i++) {
    const art = document.createElement("article");
    const relleno = document.createElement("button");
    const imgRelleno = document.createElement("img");

    relleno.classList.add("juego");
    relleno.textContent = "Indie Game Reviews";

    imgRelleno.src =
      "https://res.cloudinary.com/dchhrtqvv/image/upload/v1761494069/logo_gaakp2.png";
    imgRelleno.classList.add("imgJuego");
    imgRelleno.alt = "imagen de Indie Game Reviews";

    relleno.appendChild(imgRelleno);
    art.appendChild(relleno);
    document.getElementById("contenedor").appendChild(art);
  }
}
