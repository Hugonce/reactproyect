import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import ListaPrductos from "../ListaProductos";
function DetalleProductos(){

    const {productoId} = useParams();

    const producto = ListaPrductos.find((producto)=>producto.id == productoId);

    const {name, category,price, img, description } = producto;
    return (

        <div>
            <img src={img}/>
            <h2>{name}</h2>
            <h3>{category}</h3>
            <h3>${price}</h3>
            <h3>{description}</h3>
            <Link to="/">Volver al inicio</Link>
        </div>
    )

}


export default DetalleProductos