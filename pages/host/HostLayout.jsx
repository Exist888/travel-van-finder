import { NavLink, Outlet } from "react-router-dom";

export function HostLayout() {
    
    return (
        <section className="host-section">
            <nav className="elements-container">
                <NavLink 
                    to="/host" 
                    end
                    className={({isActive}) => isActive ? "active" : ""}
                    >
                    Dashboard
                </NavLink>
                <NavLink 
                    to="/host/income" 
                    className={({isActive}) => isActive ? "active" : ""}
                    >
                    Income
                </NavLink>
                <NavLink 
                    to="/host/vans" 
                    className={({isActive}) => isActive ? "active" : ""}
                    >
                    Vans
                </NavLink>
                <NavLink 
                    to="/host/reviews" 
                    className={({isActive}) => isActive ? "active" : ""}
                    >
                    Reviews
                </NavLink>
            </nav>
            <Outlet/>
        </section>
    );
}