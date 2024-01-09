
import ListaPrductos from "../ListaProductos";

export const productosCarrito = [
    {
        id: "1",
        stock:  0,
        cantidad: "0",
        preciototal: 0,

    },
    {
        id: "2",
        stock:  0,
        cantidad: "0",
        preciototal: 0,

    },
    {
        id: "3",
        stock:  0,
        cantidad: "0",
        preciototal: 0,

    },
    {
        id: "4",
        stock:  0,
        cantidad: "0",
        preciototal: 0,

    },
    {
        id: "5",
        stock:  0,
        cantidad: "0",
        preciototal: 0,

    },
    {
        id: "6",
        stock:  0,
        cantidad: "0",
        preciototal: 0,

    },
    {
        id: "7",
        stock:  0,
        cantidad: "0",
        preciototal: 0,

    },
    {
        id: "8",
        stock:  0,
        cantidad: "0",
        preciototal: 0,
    },
    {
        id: "9",
        stock:  0,
        cantidad: "0",
        preciototal: 0,
    },
    {
        id: "10",
        stock:  0,
        cantidad: "0",
        preciototal: 0,
    },
    {
        id: "11",
        stock:  0,
        cantidad: "0",
        preciototal: 0,
    },
    {
        id: "12",
        stock:  0,
        cantidad: "0",
        preciototal: 0,
    },
    {
        id: "13",
        stock:  0,
        cantidad: "0",
        preciototal: 0,
    },
    {
        id: "14",
        stock:  0,
        cantidad: "0",
        preciototal: 0,
    },
    {
        id: "15",
        stock:  0,
        cantidad: "0",
        preciototal: 0,
    },
    {
        id: "16",
        stock:  0,
        cantidad: "0",
        preciototal: 0,
    },

]


function SumoCarrito(idProducto, quantity){

    const producto = productosCarrito.find((productosCarrito)=>productosCarrito.id == idProducto);
    const productostock = ListaPrductos.find((productos)=>productos.id == idProducto);
    
    producto.stock = Number(productostock.stock);
    producto.preciototal = producto.preciototal + Number(productostock.price) * Number(quantity);
    
    if(Number(producto.cantidad) + Number(quantity) <= producto.stock )producto.cantidad = Number(producto.cantidad) + Number(quantity);
        return(
            console.log("el id es  " + producto.id + "  y la cantidad " + producto.cantidad + " Y el precio es de " + producto.preciototal)
        )

}


export default SumoCarrito;