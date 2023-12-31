import { useEffect, useState } from "react";
import getProducts from "./Listaprods";
import getSnacks from "./Listasnacks";
import ItemList from "./ItemList"
function ItemListContainer({greeting}){

    const [products, setProducts] = useState([])

    useEffect(() => {

        getProducts()
            .then(response =>{
                setProducts(response)
            })
            .catch(error =>{
                console.error(error)
            })

    })
    
    return (
        <div>

            <h1 className="title is-2 .is-$blue is-flex is-justify-content-center">{greeting}</h1>
            <ItemList products = {products}/>
        </div>
        
    )
}

export default ItemListContainer;