import { useState, useEffect, Fragment } from "react";
import { useParams, Link } from "react-router-dom";

export function HostVanDetail() {
    const [hostVan, setHostVan] = useState(null);
    const params = useParams();
    
    console.log(params);
    
    useEffect(() => {
        fetch(`/api/host/vans/${params.id}`)
        .then(response => response.json())
        .then(data => {
            console.log(data.vans);
            setHostVan(data.vans);
        });
    }, [params.id]);
    
    return hostVan ? (
        <div className="elements-container">
            <Link className="back-link" to="/host/vans/">
                <span>
                    <i className="fa-solid fa-arrow-left-long"></i>
                    Back to all vans
                </span>
            </Link>
            <section className="host-van-section elements-container">
                <div className="container-main">
                <img 
                    src={hostVan.imageUrl} 
                    alt={`Image of ${hostVan.name}, a ${hostVan.type} hostVan`}
                    />
                    <div>
                        <span className={`van-type-chip ${hostVan.type}`}>{hostVan.type}</span>
                        <h1>{hostVan.name}</h1>
                        <p className="single-van-price">${hostVan.price}<span>/day</span></p>
                    </div>
                </div>
                <div className="container-secondary">
                    <p><span>Name: </span>{hostVan.name}</p>
                    <p className="capitalize"><span>Category: </span>{hostVan.type}</p>
                    <p><span>Description: </span>{hostVan.description}</p>
                    <p><span>Visibility: </span>Public</p>
                </div>
            </section>
        </div>
    ) : (
        <span 
            className="loading-notification elements-container"
            >
            Loading...
        </span>
    );
}