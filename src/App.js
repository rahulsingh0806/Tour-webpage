import './App.css';
import Tours from './Tour Website/Tours';
import {useState} from 'react';
import data from './data';

export default function App() {

  const [tours, setTours] = useState(data);

  function removeTour(id){
    const newTours = tours.filter(tour => tour.id !== id);
    setTours(newTours); 
  }

  if(tours.length === 0){
    return(
        <div className="refresh">
          <h2>No Tour Left</h2>
          <button className='btn-white' onClick={() => setTours(data)}>Refresh</button>
        </div>
    )
}


  return (
    <div className='app'>
      <Tours tours={tours} removeTour={removeTour}/>
    </div>
  );
}