import carrito from "../img/carrito-de-compras.png"
import { Link } from "react-router-dom";
import { useState } from "react";
import { productosCarrito } from "./SumoCarrito";



    

    function CartWidget(){
        
        const[articulos, setArticulos] = useState(0)
        const editarArticulos = () =>{
            let productosAComprar = 0;
            productosCarrito.forEach((producto)=> productosAComprar = productosAComprar + Number(producto.cantidad));
            setArticulos(productosAComprar)
        
    }

    return (
        <div className= "is-flex is-justify-content-center" onClick={()=> editarArticulos()}>
            <Link to="cart" className="is-size-5"><img className= "image is-64x64 " src={carrito} alt="Carrito-de-compras"/></Link>
            <Link to="cart" className="is-size-5">{articulos}</Link>
        </div>
    )
}

export default CartWidget;