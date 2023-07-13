import { productService } from "../service/product-service.js"

const nuevoProducto = (nombre, imagenUrl, precio, id) => {
    const card = document.createElement("div")
    const contenido =
    `<div class="producto__card">
    <img class="producto__card--imagen" src="${imagenUrl}" alt="imagen producto">
    <p class="producto__card--nombre">${nombre}</p>
    <p class="producto__card--precio">${precio}</p>
    <a class="verProducto" href="muestraProducto.html?id=${id}">Ver producto</a>
    </div>`

    card.innerHTML = contenido
    card.dataset.id = id
    
    return card
}

const productos = document.querySelector('[data-product]')

productService.listaProductos().then((data) => {
    data.forEach(({imagenUrl,nombre,precio,id}) => {
        const productoNuevo = nuevoProducto(nombre,imagenUrl,precio,id);
        productos.appendChild(productoNuevo);
    });
})
.catch((error) => alert("Ocurrio un Error"));