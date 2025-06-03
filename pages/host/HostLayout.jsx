import { Link, Outlet } from "react-router-dom";

export function HostLayout() {
    return (
        <section className="host-section elements-container">
            <h1>Host Section</h1>
            <nav>
                <Link to="/host/dashboard">Dashboard</Link>
                <Link to="/host/income">Income</Link>
                <Link to="/host/reviews">Reviews</Link>
            </nav>
            <Outlet/>
        </section>
    );
}