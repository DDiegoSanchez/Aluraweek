import { productService } from "../service/product-service.js"

const formulario = document.querySelector("[data-form]");

const obtenerInformacion = async () => {
    const link = new URL(window.location);
    const id = link.searchParams.get("id");

    /*if(id == null){
        window.location.href = "/screens/error.html";
    }*/

    const imagenUrl = document.querySelector("[data-url]");
    const categoria = document.querySelector("[data-categoria]");
    const nombre = document.querySelector("[data-nombre]");
    const precio = document.querySelector("[data-precio]");
    const descripcion = document.querySelector("[data-descripcion]");

    try{
        const producto = await productService.detalleProducto(id)
        if(producto.imagenUrl && producto.categoria && producto.nombre && producto.precio && producto.descripcion){
            imagenUrl.value = producto.imagenUrl;
            categoria.value = producto.categoria;
            nombre.value = producto.nombre;
            precio.value = producto.precio;
            descripcion.value = producto.descripcion;
        }else{
            throw new Error();
        }
    } catch(error){
        window.location.href = "/screens/error.html";
    }

}

obtenerInformacion();

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const link = new URL(window.location);
    const id = link.searchParams.get("id");
    const imagenUrl = document.querySelector("[data-url]").value
    const categoria = document.querySelector("[data-categoria]").value
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    productService.actualizarProducto(imagenUrl,categoria,nombre,precio,descripcion, id).then(() => {
        window.location.href = "productos.html";
    });
})