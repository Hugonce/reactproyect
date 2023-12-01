import Item from "./Item"

function ItemList({products}){


        return(

            <div className= "is-flex is-justify-content-space-evenly">
                {products.map(prod => <Item key={prod.id} {...prod}/>)}
            </div>
        )

}


export default ItemList