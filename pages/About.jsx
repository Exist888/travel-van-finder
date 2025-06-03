import { Link } from "react-router-dom";

export function About() {
    const titleText = "Travel with breathing room in a cozy rental van."
    
    return (
        <section className="about-section">
            <div 
                className="about-section-image-placeholder"
                aria-label="a travel van parked next to a lake surrounded by mountains"
            >
            </div>
            <div className="elements-container">
                <h1>{titleText}</h1>
                <p>Our mission is to brighten your road trip experience with the ideal travel van rental. Our vans are recertified by expert mechanics before each trip to ensure you can embark without any hindrance.</p>
                <p>Our team is full of van enthusiasts who know first hand the joys of exploring the world on 4 wheels.</p>
                <article className="about-section-cta">
                    <h2>Your destination awaits. Your van is ready.</h2>
                    <Link className="link-button" to="/vans">Explore our vans</Link>
                </article>
            </div>
        </section>
    );
}