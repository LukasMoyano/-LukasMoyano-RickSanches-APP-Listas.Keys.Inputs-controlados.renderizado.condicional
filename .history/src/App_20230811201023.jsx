import React, { useState, useEffect } from "react";
import axios from "axios";
import { getRamdomDimension } from "./utils/ramdom";
import { LocationForm } from "./component/LocationForm";
import { ResidentList } from "./component/ResidentList";
import { LocationInfo } from "./component/LocationInfo";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  useEffect(() => {
    const randomDimension = getRamdomDimension(126)
    console.log(randomDimension);

    const url = `https://rickandmortyapi.com/api/location/${randomDimension}`;

axios
  .get(url)
  .then(({data}) => console.log(data))
  .catch((err) => console.log(err))


    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((error) => console.log(error));
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target[0].value;

    const url = `https://rickandmortyapi.com/api/location/${newLocation}`;

    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((error) => console.log(error));
  };

  return (
    <main>
      <section  class="contenedor-imagenes" className="flex">
        <img src="w-full h-screen ./src/assets/RickAndMorty_BigBg001.png bg-cover" />
        <img src="w-full h-screen ./src/assets/RickAndMorty_BigBg002.png bg-cover" />
        <img src="w-full h-screen ./src/assets/RickAndMorty_BigBg003.png.jpg bg-cover" />

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
