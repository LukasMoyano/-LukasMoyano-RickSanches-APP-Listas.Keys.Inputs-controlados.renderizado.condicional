import React, { useState, useEffect } from "react";
import axios from "axios";
import { getRandomDimension } from "./utils/random";
import { LocationForm } from "./component/LocationForm";
import { ResidentList } from "./component/ResidentList";
import { LocationInfo } from "./component/LocationInfo";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target[0].value;

    fetchDimension(newLocation)

  };

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`
    axios
    .get(url)
    .then(({ data }) => setCurrentLocation(data))
    .catch((error) => console.log(error));
  };
  useEffect(() => {
    const randomDimension = getRandomDimension(126);
    fetchDimension(randomDimension);
  }, []);

  return (
    <main class="contenedor-imagenes flex">
      <img src="w-full h-screen ./src/assets/RickAndMorty_BigBg001.png bg-cover" />
      <img src="w-full h-screen ./src/assets/RickAndMorty_BigBg002.png bg-cover" />
      <img src="w-full h-screen ./src/assets/RickAndMorty_BigBg003.png.jpg bg-cover" />

      <section>
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
