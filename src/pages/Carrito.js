

import { productosCarrito } from "../components/SumoCarrito";
import ProductosAgregados from "./ProductosAgregados";
import ListaPrductos from "../ListaProductos";
import { precioArticulo } from "../components/SumoCarrito";
import { useState } from "react";

function GetCart(){
    
    
    const[precio, setPrecio] = useState(0)
    const actualizarPrecio = () =>{
        let sumaprecios = 0;
        productosCarrito.forEach((producto)=> sumaprecios = sumaprecios + Number(producto.preciototal));
        if(precio >= 0) {
            setPrecio(sumaprecios)
            console.log("blajdfalfalv   " + sumaprecios)
        }
    }

    return(
        <div>
                <div className= "is-flex is-justify-content-space-evenly" onClick={()=> actualizarPrecio()}>
                    {ListaPrductos.map(prod => <ProductosAgregados key={prod.id} {...prod}/>)}
                </div>
                <h2 className="is-flex is-justify-content-center">Total a pagar: ${precio}</h2>
        </div>
        
    )
}
export default GetCart;