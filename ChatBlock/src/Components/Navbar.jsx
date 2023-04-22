import { NavLink } from "react-router-dom";
import logo from '../assets/Logo.jpg'

function Navbar(props) {
    const { userAccount } = props;
    return (
        <>
            <nav>
                <ul>
                    <li><img src={logo} alt="" /></li>
                    <li><NavLink className="primaryBtnDesign" to='/'>Home</NavLink></li>
                    <li><NavLink className="primaryBtnDesign" to='/Rooms'>Rooms</NavLink></li>
                    <li><NavLink className="primaryBtnDesign" to='/About'>About</NavLink></li>
                </ul>
                <p className="primaryBtnDesign">Account: {userAccount} </p>
            </nav>
        </>
    )
}
export default Navbar;