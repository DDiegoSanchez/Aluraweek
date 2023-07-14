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
            id
            })
    })
    /*.then(respuesta => {
        if(respuesta.ok){
            return respuesta.body
        }
    })
    throw new Error("No pudimos crear tu producto");*/
}

const eliminarProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
      method: "DELETE",
    });
  };

const detalleProducto = (id) => {
    return fetch(`http://localhost:3000/producto/${id}`).then((respuesta) => respuesta.json()
    );
}

const actualizarProducto = (imagenUrl,categoria,nombre,precio,descripcion, id) => {
    return fetch(`http://localhost:3000/producto/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({imagenUrl,categoria,nombre,precio,descripcion})
    })
    .then(respuesta => respuesta)
    .catch((err) => console.log(err));
}

export const productService = {
    listaProductos,
    crearProducto,
    eliminarProducto,
    detalleProducto,
    actualizarProducto,
}