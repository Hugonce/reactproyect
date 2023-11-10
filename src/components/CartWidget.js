import carrito from "../img/carrito-de-compras.png"

function CartWidget(){

    return (
        <div className= "is-flex is-justify-content-center">
            <img className= "image is-64x64 " src={carrito} alt="Carrito-de-compras"/>
            11
        </div>
    )
}

export default CartWidget;