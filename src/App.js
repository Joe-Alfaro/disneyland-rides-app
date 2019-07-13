import React, { useEffect, useState } from 'react';
import axios from 'axios';

import Table from './components/table';

const App = () => {
  const [rides, setRides] = useState([]);

  const getDisneylandRides = () => {
    axios.get('http://localhost:8000/rides')
      .then(res => setRides(res.data.filter(ride => ride.status !== 'Closed')))
      .catch(err => console.log(err))
  }

  useEffect(() => {
    getDisneylandRides()
  }, []);

  return (
    <div style={{margin: '25px auto', width: '90%'}} className="App">
      {rides.length > 0
        ? <Table rows={rides} />
        : <h1>LOADING...</h1>
      }
    </div>
  )
}

export default App;
