import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";

function NavBar(){

    return (
        <nav>

            <h2 className="navbar-start is-size-3 is-flex is-justify-content-center">HugE-commerce</h2>
            <div className="navbar-end is-flex is-justify-content-space-evenly">
                <Link to="/" className="is-size-5">Home</Link>
                <Link to="bebidas" className="is-size-5">Bebidas</Link>
                <Link to="snacks" className="is-size-5">Snacks</Link>
            </div>
            <CartWidget/>
        </nav>
        

    )
}

export default NavBar;