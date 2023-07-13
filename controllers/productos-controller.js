import { productService } from "../service/product-service.js"

const nuevoProducto = (imagenUrl,categoria,nombre,precio,descripcion,id) => {
    const card = document.createElement("div")
    const contenido =
    `
    <img class="producto__card--imagen" src="${imagenUrl}" alt="imagen producto">
    <p class="producto__card--nombre">${nombre}</p>
    <p class="producto__card--precio">$ ${precio}</p>
    <a class="verProducto" href="muestraProducto.html?id=${id}">Ver producto</a>
    `
    card.classList.add("producto__card")
    card.innerHTML = contenido
    card.dataset.id = id
    
    return card
}

imprimeIndex('[data-starwars]', 'Star Wars')
imprimeIndex('[data-consolas]', 'Consolas')
imprimeIndex('[data-diversos]', 'Diversos')

//Esta solo se usa para imprimir en el index
function imprimeIndex (etiquetaSelector, categoria){
    const productosDiversos = document.querySelector(etiquetaSelector)
    const categoriaDiversos = categoria; // Reemplaza con la categoría deseada

    productService.listaProductos().then((data) => {
        const productosFiltrados = data.filter(producto => producto.categoria === categoriaDiversos);
        const primeros5Productos = productosFiltrados.slice(0, 6);//Solo la cantidad que queremos mostrar
        primeros5Productos.forEach(({imagenUrl,categoria,nombre,precio,descripcion,id}) => {
            const productoNuevo = nuevoProducto(imagenUrl,categoria,nombre,precio,descripcion,id);
            productosDiversos.appendChild(productoNuevo);
        });
    })
    .catch((error) => alert("Ocurrio un Error"));
}