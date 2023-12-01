import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import ItemListSnacks from "../components/ItemListSnacks";
function Home(){

    return (

        <div>
            <Outlet/>
            <ItemListContainer greeting={'Bebidas'} />
            <ItemListSnacks greeting={'Snacks'} />
        </div>
    )
}

export default Home;