import NavBar from "./components/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App(){

    return (
        <div>
            <NavBar />
            <ItemListContainer greeting={'Bienvenidos'}/>
        </div>


    )

}

export default App;