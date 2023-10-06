import Card from "./Card";
import './Tours.css';

export default function Tours({tours, removeTour}){
    return (
        <div className="container">
            <div>
                <h1 className="title">Plan With Love</h1>
            </div>
            <div className="cards">
                {
                    tours.map((tour) => {
                        return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
                    })
                }
            </div>
        </div>
    );
}