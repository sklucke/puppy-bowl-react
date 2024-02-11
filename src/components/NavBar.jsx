import React from "react"
import {Link} from "react-router-dom";
import "./NavBar.css";

const NavBar =() => {
    return(
        <nav className="navbar-container">
            <ul className="nav-links">
                <li>
                    <Link className="nav-link" to="/">Home</Link>
                </li>
                <Link className="nav-link" to="/players">All Players</Link>
            </ul>
        </nav>

    );

}

export default NavBar;