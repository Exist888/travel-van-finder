import { Link } from "react-router-dom";
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
                    <Link to="/host">Host</Link>
                    <Link to="/about">About</Link>
                    <Link to="/vans">Vans</Link>
                </nav>
            </div>
        </header>
    );
}