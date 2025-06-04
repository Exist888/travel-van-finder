import { HostVans } from "./HostVans.jsx";

export function Dashboard() {
    return (
        <section className="host-dashboard-content">
            <article className="host-dashboard-intro">
                <div className="elements-container">
                    <h1>Welcome</h1>
                    <p>Income last <span>30 days</span></p>
                    <p className="income-text">$2,260</p>
                </div>
            </article>
            <article className="elements-container">
                <div className="host-dashboard-review-info">
                    <h2>Review score</h2>
                    <div className="review-score-container">
                        <i className="fa-solid fa-star"></i>
                        <p className="review-score-text">
                            <span>5.0</span>/5
                        </p>
                    </div>
                </div>
            </article>
            <HostVans/>
        </section>
    );
}