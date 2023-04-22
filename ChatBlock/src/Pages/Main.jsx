import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";

function Main() {
    return (
        <>
            <Navbar />
            <Outlet />
        </>
    )
}

export default Main;