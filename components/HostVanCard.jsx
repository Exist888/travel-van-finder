import { Link } from "react-router-dom";

export function HostVanCard({imageUrl, name, price, type, id}) {
    return (
        <Link 
            className="host-van-card-link"
            to={`/host/vans/${id}`}
            aria-label={`View details for ${name}, a ${type}, priced at ${price} dollars per day.`}
            >
            <article className="host-van-card">
                <img src={imageUrl} alt={`photo of our ${name}, a ${type} van`}/>
                <div>
                    <h4>{name}</h4>
                    <p><span>${price}</span>/day</p>
                </div>
            </article>
        </Link>
    );
}