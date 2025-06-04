import { useState, useEffect } from "react";
import { HostVanCard } from "../../components/HostVanCard.jsx";

export function HostVans() {
    const [hostVans, setHostVans] = useState([]);
    
    useEffect(() => {
        fetch("/api/host/vans")
        .then(response => response.json())
        .then(data => {
            console.log(data.vans);
            setHostVans(data.vans);
        });
    }, []);
    
    const hostVansJsx = hostVans.map((hostVan) => {
        return (
            <HostVanCard 
                key={hostVan.id}
                imageUrl={hostVan.imageUrl}
                name={hostVan.name}
                price={hostVan.price}
                type={hostVan.type}
                id={hostVan.id}
            />
        );
    });
    
    return hostVans ? (
        <section className="host-vans-section">
            <div className="elements-container">
                <h3>Your listed vans</h3>
                <section 
                    className="host-van-cards"
                    >
                    {hostVansJsx}
                </section>
            </div>
        </section>
    ) : (
        <span 
            className="loading-notification host-vans-section elements-container"
            >
            Loading...
        </span>
    );
}