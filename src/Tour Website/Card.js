import {useState} from 'react';
import './Card.css';

export default function Card({id, name, info, image, price, removeTour}){
    const [readmore,setReadMore] = useState(false);
    const description = readmore ? info : `${info.substring(0,200)}...`;

    function readMoreHandler(){
        setReadMore(!readmore);
    }

    return(
        <div className="card">

            <img src={image} className='image'/>

            <div className="tour-info">

                <div className="tour-details">
                    <div className="tour-price">₹ {price}</div>
                    <div className="tour-name">{name}</div>
                </div>

                <div className="description">
                    {description}
                    <span className="read-more" onClick={readMoreHandler}>
                        {readmore ? ` Show Less` : ` Read More`}
                    </span>
                </div>

            </div>

            <button onClick={() => removeTour(id)} className="btn-red">Not Interested</button>

        </div>
    );
}   