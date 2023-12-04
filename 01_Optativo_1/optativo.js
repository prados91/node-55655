//Creación de array vacio
let arrayProductos = [];

// Función agregar productos
const addProd = (id, nombre, precio) => {
    const newProd = { id, nombre, precio };
    arrayProductos.push(newProd);
    console.log(`Se agrego un nuevo producto:${id} - ${nombre} - ${precio}`);
};

// Función buscar productos
const findProd = (id) => {
    const buscarProd = arrayProductos.find((e) => e.id === id);

    if (buscarProd) {
        return buscarProd;
    } else {
        console.log("No se encontró el producto");
    }
};

// Función actualizar productos
const actProd = (id, actNombre, actPrice) => {
    const idActProd = arrayProductos.findIndex((e) => e.id === id);
    if (idActProd !== -1) {
        arrayProductos[idActProd].nombre = actNombre;
        arrayProductos[idActProd].precio = actPrice;
        console.log(
            `Producto actualizado: ${actNombre}, Nuevo precio: ${actPrice}`
        );
    } else {
        console.log("No se encontró el producto");
    }
};

// Función eliminar producto
const deleteProd = (id) => {
    const idDeleteProd = arrayProductos.findIndex(
        (producto) => producto.id === id
    );
    if (idDeleteProd !== -1) {
        const productoEliminado = arrayProductos.splice(idDeleteProd, 1)[0];
        console.log(`Producto eliminado: ${productoEliminado.nombre}`);
    } else {
        cconsole.log("No se encontró el producto");
    }
};

addProd(1, "Papa", 1000);
addProd(2, "Cebolla", 2000);
findProd(2);
actProd(1, "Papa", "3000");
addProd(3, "Zanahoria", 4000);
deleteProd(2);

console.log(arrayProductos);

findProd(5);
