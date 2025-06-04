import { useState, useEffect } from "react";
import { VanCard } from "../components/VanCard.jsx";

export function Vans() {
    const [vans, setVans] = useState([]);
    
    useEffect(() => {
        fetch("/api/vans")
        .then(response => response.json())
        .then(data => {
            setVans(data.vans);
        });
    }, []);
    
    const vansJsx = vans.map((van) => {
        return (
            <VanCard 
                key={van.id}
                imageUrl={van.imageUrl}
                name={van.name}
                type={van.type}
                price={van.price}
                id={van.id}
            />
        );
    });
    
    return vans ? (
        <section className="vans-list-section elements-container">
            <h1>Explore our van options</h1>
            <div className="vans-list">{vansJsx}</div>
        </section>
    ) : (
        <span 
            className="loading-notification vans-list-section elements-container"
            >
            Loading...
        </span>
    );
}