import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { getRamdomDimension } from './utilis/ramdom';
import { LocationForm } from './component/LocationForm';
import { ResidentList } from './component/ResidentList';
import { LocationInfo } from './component/LocationInfo';

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const randomDimension = getRamdomDimension(126); // Genera el valor aleatorio de la dimensión

    const url = `https://rickandmortyapi.com/api/location/${randomDimension}`;

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
<div class="contenedor-imagenes">
  <img src="./src/assets/RickAndMorty_BigBg001.png">
  <img src="./src/assets/RickAndMorty_BigBg002.png">
  <img src="./src/assets/RickAndMorty_BigBg003.png.jpg">
    
    <main>
      <LocationForm handleSubmit={handleSubmit} />
      <LocationInfo currentLocation={currentLocation} />
      <ResidentList residents={currentLocation?.residents ?? []} />
    </main>
</div>

  );
}

export default App;
