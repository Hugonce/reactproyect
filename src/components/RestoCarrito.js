
import { productosCarrito } from "./SumoCarrito";
import ListaPrductos from "../ListaProductos";
function RestoCarrito(idProducto, quantity){

    const producto = productosCarrito.find((productosCarrito)=>productosCarrito.id == idProducto);
    const productostock = ListaPrductos.find((productos)=>productos.id == idProducto);
    
    producto.stock = Number(productostock.stock);
    
    
    if(Number(producto.cantidad) - Number(quantity) >= 0 ){
        producto.cantidad = Number(producto.cantidad) - Number(quantity);
        producto.preciototal = producto.preciototal - Number(productostock.price) * Number(quantity);
    }
        return(
            console.log("el id es  " + producto.id + "  y la cantidad " + producto.cantidad + " Y el precio es de " + producto.preciototal)
        )

}


export default RestoCarrito;