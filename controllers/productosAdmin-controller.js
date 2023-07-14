import { productService } from "../service/product-service.js"

//Muestra todos los productos en productos.html
const productosAdmin = (imagenUrl,categoria,nombre,precio,descripcion,id) => {
    const card = document.createElement("div")
    const contenido =
    `
    <img class="producto__card--imagen" src="${imagenUrl}" alt="imagen producto">
    <p class="producto__card--nombre">${nombre}</p>
    <p class="producto__card--precio">$ ${precio}</p>
    <p>#${id}</p>
    <div class="contenedorIconos">
        <button type="button" id="${id}"><img class="icono" src="img/iconoEliminar.png" alt="icono eliminar"></button>
        <a class="button" href="editarProducto.html?id=${id}"><img class="icono" src="img/iconoEditar.png" alt="icono editar"></a>
    </div>
    `
    card.classList.add("producto__card")
    card.innerHTML = contenido
    card.dataset.id = id
    
    const btn = card.querySelector("button");
    btn.addEventListener("click", () => {
    const id = btn.id;
    productService.eliminarProducto(id)
    .then((respuesta) => {
        console.log(respuesta);
    })
        .catch((err) => alert("Ocurrió un error"));
    });

    return card
}

const productos = document.querySelector('[data-product]')

productService.listaProductos().then((data) => {
    data.forEach(({imagenUrl,categoria,nombre,precio,descripcion,id}) => {
        const productoNuevo = productosAdmin(imagenUrl,categoria,nombre,precio,descripcion,id);
        productos.appendChild(productoNuevo);
    });
})
.catch((error) => alert("Ocurrio un Error"));