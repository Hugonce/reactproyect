import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Bebidas from "./pages/Bebidas"
import Error from "./pages/Error"
import Layout from "./pages/Layout";
import Snacks from "./pages/Snacks";
import DetalleProductos from "./components/DetalleProductos";
function App() {

    return (



        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}> 
                        <Route index element={<Home/>} />
                        <Route path="bebidas" element={<Bebidas />} />
                        <Route path="snacks" element={<Snacks />} />
                        <Route path="productos/:productoId" element={<DetalleProductos/>} />
                    /</Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
            
            
        </div>


    )

}

export default App;