import "bulma/css/bulma.css"
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";
import SumoCarrito from "./SumoCarrito";
function Item ({id,name,img,price,stock}){


    return (

        <article className="card ">
            <header className= "card-header">
                <h2>{name}</h2>
            </header>
            <div className="card-image">
            <picture className= "image is-1by1">
                <img src={img} alt={name}/>
            </picture>
            </div>
            
            <section>
                <p>Precio: ${price}</p>
                <p>Disponibles: {stock}</p>
            </section>

            <footer className="is-flex is-flex-direction-column">
                <Link to= {`/productos/${id}`} >Ver Detalle</Link>
                <ItemCount initial={1} stock={stock} idProducto ={id}/>
                
            </footer>
        </article>



    )
}


export default Item;