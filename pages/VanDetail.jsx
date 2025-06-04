import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export function VanDetail() {
    const [van, setVan] = useState(null);
    const params = useParams();
    
    useEffect(() => {
        fetch(`/api/vans/${params.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.vans);
            setVan(data.vans);
        });
    }, [params.id]);
    
    function handleClick() {
        alert("This is a demo website. No real rentals available 😊");
    }
    
    return van ? (
        <section className="single-van-section elements-container">
            <img src={van.imageUrl} alt={`Image of ${van.name}, a ${van.type} van`}/>
            <div>
                <span className={`van-type-chip ${van.type}`}>{van.type}</span>
                <h1>{van.name}</h1>
                <p className="single-van-price">${van.price}<span>/day</span></p>
                <p>{van.description}</p>
                <button onClick={handleClick}>Rent this van</button>
            </div>
        </section>
    ) : (
        <span 
            className="loading-notification single-van-section elements-container"
            >
            Loading...
        </span>
    );
}