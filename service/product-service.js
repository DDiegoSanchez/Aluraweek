//GET
const listaProductos = () => fetch("http://localhost:3000/producto").then((respuesta) => respuesta.json());
//.catch(error => console.log(error))


//POST
const crearProducto = (imagenUrl,categoria,nombre,precio,descripcion) => {
    return fetch("http://localhost:3000/producto", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            imagenUrl,
            categoria,
            nombre,
            precio,
            descripcion,
            //id
            })
    })
    /*.then(respuesta => {
        if(respuesta.ok){
            return respuesta.body
        }
    })
    throw new Error("No pudimos crear tu producto");*/
}

export const productService = {
    listaProductos,
    crearProducto,
}