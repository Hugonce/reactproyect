import CartWidget from "./CartWidget";

function NavBar(){

    return (
        <nav>

            <h2 className="navbar-start is-size-3">HugE-commerce</h2>
            <div className="navbar-end">
                <button className="is-size-5">Apartado 1</button>
                <button className="is-size-5">Apartado 2</button>
                <button className="is-size-5">Apartado 3</button>
            </div>
            <CartWidget/>
        </nav>
        

    )
}

export default NavBar;