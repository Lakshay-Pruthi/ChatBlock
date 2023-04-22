import { Link } from "react-router-dom";
import logo from '../assets/Logo.jpg'

function Navbar(props) {
    const { userAccount } = props;
    return (
        <>
            <nav>
                <ul>
                    <li><img src={logo} alt="" /></li>
                    <li><Link className="primaryBtnDesign" to='/'>Home</Link></li>
                    <li><Link className="primaryBtnDesign" to='/Rooms'>Rooms</Link></li>
                    <li><Link className="primaryBtnDesign" to='/About'>About</Link></li>
                </ul>
                <p className="primaryBtnDesign">Account: {userAccount} </p>
            </nav>
        </>
    )
}
export default Navbar;