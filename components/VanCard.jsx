import { Link } from "react-router-dom"

export function VanCard({imageUrl, name, type, price, id}) {
    return (
        <Link 
            className="van-card-link" 
            to={`/vans/${id}`}
            aria-label={`View details for ${name}, a ${type}, priced at ${price} dollars per day.`}
            >
            <article className="van-card">
                <img src={imageUrl} alt={`Image of ${name}, a ${type} van`}/>
                <div className="van-card-inner-container">
                    <div>
                        <h2>{name}</h2>
                        <span className={`van-type-chip ${type}`}>
                            {type}
                        </span>
                    </div>
                    <div>
                        <p><span className="price">${price}</span></p>
                        <p>/day</p>
                    </div>
                </div>
            </article>
        </Link>
    );
}