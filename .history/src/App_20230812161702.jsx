import React, { useState, useEffect } from "react";
import axios from "axios";
import { getRadonDimension } from "./utils/random";
import { LocationForm } from "./component/LocationForm";
import { ResidentList } from "./component/ResidentList";
import { LocationInfo } from "./component/LocationInfo";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);


  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target[0].value



  useEffect(() => {
    const randomDimension = getRadonDimension(126)
    const url = `https://rickandmortyapi.com/api/location/${randomDimension}`;
    
    axios
  .get(url)
  .then(({data}) => getRadonDimension.log(data))
  .catch((err) => console.log(err))
}, []);

    const url = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((error) => console.log(error));
  };

  return (
    <main class="contenedor-imagenes flex">
        <img src="w-full h-screen ./src/assets/RickAndMorty_BigBg001.png bg-cover" />
        <img src="w-full h-screen ./src/assets/RickAndMorty_BigBg002.png bg-cover" />
        <img src="w-full h-screen ./src/assets/RickAndMorty_BigBg003.png.jpg bg-cover" />

      <section  >
        <div>          
          <LocationForm handleSubmit={handleSubmit} />
          <LocationInfo currentLocation={currentLocation} />
          <ResidentList residents={currentLocation?.residents ?? []} />
        </div>
      </section>
    </main>
  );
}

export default App;
