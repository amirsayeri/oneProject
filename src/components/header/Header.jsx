import "./header.css"
import { Link } from "react-router-dom"
import img1 from "../../../public/ghaleb/logo-01.png"
import img2 from "../../../public/ghaleb/login.png"
import img3 from "../../../public/ghaleb/cart.png"
import img4 from "../../../public/ghaleb/icon-menu.png"
import { useContext } from "react"
import {changeNumber} from "../../App"
import { useNavigate } from "react-router-dom"

const Header = () => {

    const {number} = useContext(changeNumber)
    const loginNaviget = useNavigate()

    return (
        <div>
            <nav className="navbar">
                <img src={img1} alt="logo" className="logo" />
                <ul className="menu">
                    <li><Link to="/" className="menu_item">Home</Link></li>
                    <li><Link to="/about" className="menu_item">About</Link></li>
                    <li><Link to="/products" className="menu_item">Products</Link></li>
                    <li><Link to="/Contactus" className="menu_item">Contact us</Link></li>
                </ul>
                <div className="right_menu">
                    <img src={img2} alt="login" className="login" onClick={ () => loginNaviget("/login")}/>
                    <img src={img3} alt="sabad" className="sabad"/>
                    <p className="number_sabad">{number}</p>
                </div>

                <span>
                    <img src={img4} alt="icon-menu" className="icon_menu" />
                </span>

            </nav>

        </div>
    )
}

export default Header 
