import React, { useEffect, useState } from 'react';
import Loader from 'react-loader-spinner';
import axios from 'axios';

import Table from './components/table';

const App = () => {

  const [rides, setRides] = useState([]);
  
  useEffect(() => {
  const getDisneylandRides = () => {
    axios.get('http://localhost:8000/rides')
      .then(res => {
        setRides(res.data.map(ride => {
          return {
            ...ride, 
            waitTime: ride.waitTime === 13
              ? 10
              : ride.waitTime
          }
        }))
        console.log(rides);
      })
      .catch(err => console.log(err))
  }

    getDisneylandRides();
    const interval = setInterval(() => {
      getDisneylandRides();
    }, 1000 * 60 * 1);
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div style={{margin: '25px auto', width: '90%'}} className="App">
      {rides.length > 0
        ? <>
            <Table rows={rides.filter(ride => ride.status !== 'Closed')} />
            <h3>Closed Rides</h3>
            <ul>
              {
                rides.filter(ride => ride.status === 'Closed')
                  .map(ride => <li>{ride.name}</li>)
              }
            </ul>
          </>
        : <div style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Loader
              type="Rings"
              color="#00BFFF"
              height="200"	
              width="200"
            />
          </div>
      }
    </div>
  )
}

export default App;
