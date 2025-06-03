import { Link } from "react-router-dom";

export function HeroSection() {
    return (
        <section className="hero-section">
            <div className="elements-container">
                <h1>Find the perfect travel van for you.</h1>
                <p>Browse our hundreds of travel vans, discover your best fit, and make your next road trip unforgettable in a roomy, road-ready van.</p>
                <Link className="link-button" to="/vans">Find your van</Link>
            </div>
        </section>
    );
}