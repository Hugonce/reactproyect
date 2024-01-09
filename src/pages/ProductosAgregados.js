
import { productosCarrito } from "../components/SumoCarrito";
import { Link } from "react-router-dom";
import ItemCart from "../components/ItemCart";
function ProductosAgregados({id,name,img,price,stock}){
    const producto = productosCarrito.find((productosCarrito)=>productosCarrito.id == id);
    if(producto.cantidad > 0){
        return(
        
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
                    <ItemCart initial={producto.cantidad} stock={stock} idProducto ={id}/>
                </footer>
            </article>
        )
    }
    
}
export default ProductosAgregados;