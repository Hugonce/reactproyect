import { useEffect, useState } from "react";
import getProducts from "./Listaprods";
import getSnacks from "./Listasnacks";
import ItemList from "./ItemList"
function ItemListSnacks({greeting}){

    const [snacks, setSnacks] = useState([])

    useEffect(() => {

        getSnacks()
            .then(response =>{
                setSnacks(response)
            })
            .catch(error =>{
                console.error(error)
            })

    })
    return (
        <div>

            <h1 className="title is-2 .is-$blue is-flex is-justify-content-center">{greeting}</h1>
            <ItemList products = {snacks}/>
        </div>
        
    )
}

export default ItemListSnacks;