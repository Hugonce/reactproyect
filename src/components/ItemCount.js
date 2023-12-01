import { useState } from "react";

function ItemCount({initial, stock, onAdd}){

    const[quantity, setQuantity] = useState(initial)

    const incrementar = () =>{
        if(quantity < stock) {
            setQuantity(quantity+1)
        }
    }

    const decrementar = () =>{
        if(quantity > 1){
            setQuantity(quantity-1)
        }
    }

    return(
        <div>
        
            <div>
            <div className="is-flex is-justify-content-space-evenly">
                    <button className= "Button" onClick={decrementar}>-</button>
                    <p>{quantity}</p>
                    <button className= "Button" onClick={incrementar}>+</button>
                </div>
                <button className= "Button" onClick={()=> onAdd(quantity)} disabled= {!stock}>
                    Añadir al carrito
                    </button>
            </div>
        
        </div> 
    )
}

export default ItemCount;