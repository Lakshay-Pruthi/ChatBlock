import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function Main(props) {
    const { userAccount } = props;
    return (
        <>
            <Navbar userAccount={userAccount} />
            <Outlet />
            <Footer />
        </>
    )
}

export default Main;