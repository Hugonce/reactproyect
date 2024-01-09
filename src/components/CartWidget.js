import carrito from "../img/carrito-de-compras.png"
import { Link } from "react-router-dom";
import { precioArticulo } from "./SumoCarrito";
import { useState } from "react";




    export const EditarArticulos = (valor) =>{

            const[articulos, setArticulos] = useState(0)
            setArticulos(articulos + valor)
        
    }

    function CartWidget(){

    
    return (
        <div className= "is-flex is-justify-content-center">
            <Link to="cart" className="is-size-5"><img className= "image is-64x64 " src={carrito} alt="Carrito-de-compras"/></Link>
            <Link to="cart" className="is-size-5">{precioArticulo.articulo}</Link>
        </div>
    )
}

export default CartWidget;