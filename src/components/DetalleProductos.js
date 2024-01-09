import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import ListaPrductos from "../ListaProductos";
import ItemCount from "./ItemCount";
function DetalleProductos(){

    const {productoId} = useParams();

    const producto = ListaPrductos.find((producto)=>producto.id == productoId);

    const {name, category,price, img,stock, description } = producto;
    return (

        <div className="is-flex is-justify-content-center">
            
            <img src={img} height="500" width= "500"/>
            <div>
                <h2>{name}</h2>
                <h3>{category}</h3>
                <h3>${price}</h3>
                <h3>{description}</h3>
                <h3>Stock disponible: {stock}</h3>
                <ItemCount initial={1} stock={stock} idProducto ={productoId}/>
                <Link to="/">Volver al inicio</Link>
            </div>
            
        </div>
    )

}


export default DetalleProductos