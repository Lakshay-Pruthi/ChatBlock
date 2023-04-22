import Popup from "../Components/Popup";
import logo from '../assets/Logo2.jpg'


function Home() {
    return (
        <>
            <div className="container">
                <div id="left">
                    <img src={logo} alt="" />
                    <h1>Welcome!</h1>
                </div>
                <Popup />
                <button className="primaryBtnDesign">Create Room</button>
            </div>
        </>
    )
}

export default Home;