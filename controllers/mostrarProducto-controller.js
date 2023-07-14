import { productService } from "../service/product-service.js"

const muestraProducto = (imagenUrl,categoria,nombre,precio,descripcion,id) => {
    const card = document.createElement("div")
    const contenido =
    `
    <img src="${imagenUrl}" alt="imagen producto">
        <div class="infoProducto">
            <h2>${nombre}</h2>
            <p class="precioPro">$ ${precio}</p>
            <p class="descripcion">${descripcion}</p>
        </div>
    `
    card.classList.add("muestraProducto")
    card.innerHTML = contenido
    card.dataset.id = id
    
    return card
}
