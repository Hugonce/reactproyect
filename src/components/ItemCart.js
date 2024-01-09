import { useState } from "react";
import SumoCarrito from "./SumoCarrito";
import RestoCarrito from "./RestoCarrito";
function ItemCart({initial, stock, idProducto}){

    const[quantity, setQuantity] = useState(initial)

    const incrementar = () =>{
        if(quantity < stock) {
            setQuantity(quantity+1);
            SumoCarrito(idProducto, 1);

        }
    }

    const decrementar = () =>{
        if(quantity > 1){
            setQuantity(quantity-1);
            RestoCarrito(idProducto, 1);
        }
    }
    const eliminar = () =>{

            RestoCarrito(idProducto, quantity);
            setQuantity(quantity-1);

    }


    return(
        <div>
        
            <div>
            <div className="is-flex is-justify-content-space-evenly">
                    <button className= "Button" onClick={decrementar} disabled= {quantity == 1} >-</button>
                    <p>{quantity}</p>
                    <button className= "Button" onClick={incrementar}>+</button>
                </div>
                <button className= "Button" onClick={eliminar}>Eliminar</button>
            </div>
        
        </div> 
    )
}

export default ItemCart;