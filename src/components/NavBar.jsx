import react from "react"
import {Link} from "react-router-dom"
import "./NavBar.css"

const NavBar = () => {
    return(
        <nav className="navbar-container">
            <ul className="nav-links">
                <li>
                    <Link className="nav-link" to="/">All Players</Link>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar;