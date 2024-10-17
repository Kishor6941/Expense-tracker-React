import { NavLink } from "react-router-dom"
import "./navbar.scss"
const Navbar = () => {
    return (
        <>
        <nav className="navbar">
            <ul>
            <li><NavLink to="/">Expenses Tracker</NavLink></li>
            <li><NavLink to="/digital-watch">Digital Watch</NavLink></li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar