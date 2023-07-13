import { productService } from "../service/product-service.js";

const form = document.querySelector("[data-form]")

form.addEventListener("submit", (event) => {
    event.preventDefault()
    const url = document.querySelector("[data-url]").value
    const categoria = document.querySelector("[data-categoria]").value
    const nombre = document.querySelector("[data-nombre]").value
    const precio = document.querySelector("[data-precio]").value
    const descripcion = document.querySelector("[data-descripcion]").value
    productService.crearProducto(url,nombre,precio)
    .then(() => {
        window.location.href = "productos.html";
    })
    .catch((err => console.log(err)));
})