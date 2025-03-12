import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { Home } from "./pages/Home/Home";
import { Cart } from "./pages/Cart";
import { PedidoConfirmado } from "./pages/PedidoConfirmado";

export function Router(){
    return(
        <Routes>
            <Route path="/" element={<DefaultLayout></DefaultLayout>}>
            
               <Route path="/" element={<Home></Home>}></Route>
               <Route path="/cart" element={<Cart/>}></Route>
               <Route path="/order/:orderId/success" element={<PedidoConfirmado/>}></Route>
            </Route>
        </Routes>
    )
}