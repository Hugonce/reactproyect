import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"
import Bebidas from "./pages/Bebidas"
import Error from "./pages/Error"
import Layout from "./pages/Layout";
import Snacks from "./pages/Snacks";
import Carrito from "./pages/Carrito";
import DetalleProductos from "./components/DetalleProductos";
import { getDocs, collection } from "firebase/firestore";
import { baseDeDatos } from "./config/firebase";
import { useEffect, useState } from "react";

function App() {

    const itemColectionRef = collection (baseDeDatos, "Items");

    useEffect(()=>{

        const getItemList = async ()=>{
            const data = await getDocs(itemColectionRef);
            const filteredData = data.docs.map((doc)=>({
                ...doc.data(),
                id:doc.id
                
            }));
            console.log(filteredData);
        }
        getItemList();
        
    },[])
    
    return (



        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Layout/>}> 
                        <Route index element={<Home/>} />
                        <Route path="bebidas" element={<Bebidas />} />
                        <Route path="snacks" element={<Snacks />} />
                        <Route path="productos/:productoId" element={<DetalleProductos/>} />
                        <Route path="cart" element={<Carrito/>} />
                    /</Route>
                    <Route path="*" element={<Error />} />
                </Routes>
            </BrowserRouter>
            
            
        </div>


    )

}

export default App;