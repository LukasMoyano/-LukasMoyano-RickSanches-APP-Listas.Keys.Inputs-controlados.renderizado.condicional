import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getRamdomDimension } from './utilis/ramdom';
import { LocationForm } from './component/LocationForm';
import { ResidentList } from './component/ResidentList';
import { LocationInfo } from './component/LocationInfo';

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const ramdomDimension = getRamdomDimension(126);
    const url = `https://rickandmortyapi.com/api/location/${ramdomDimension}`;

    axios.get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target[0].value;

    const url = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios.get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((error) => console.log(error));
  };

  return (
    <main>
      <LocationForm handleSubmit={handleSubmit} />
      <LocationInfo currentLocation={currentLocation} />
      <ResidentList residents={currentLocation?.residents ?? []} />
    </main>
  );
}

export default App;


