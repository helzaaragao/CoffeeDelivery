import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";

export function DefaultLayout(){
    return(
        <main>
            <Header></Header>
            <Outlet></Outlet>
        </main> 
    )
}