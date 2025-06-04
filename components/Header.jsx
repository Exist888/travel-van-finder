import { Link, NavLink } from "react-router-dom";
import vanLogo from "../assets/van-logo.png";

export function Header() {
    return (
        <header className="header">
            <div className="elements-container">
                <Link className="logo" to="/">
                    <img src={vanLogo} alt="graphic of a fast moving van"/>
                    Travel Van Finder
                </Link>
                <nav>
                    <NavLink 
                        to="/host"
                        className={({isActive}) => isActive ? "active" : ""}
                        >
                        Host
                    </NavLink>
                    <NavLink 
                        to="/about"
                        className={({isActive}) => isActive ? "active" : ""}
                        >
                        About
                    </NavLink>
                    <NavLink 
                        to="/vans"
                        className={({isActive}) => isActive ? "active" : ""}
                        >
                        Vans
                    </NavLink>
                </nav>
            </div>
        </header>
    );
}