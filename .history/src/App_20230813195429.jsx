import React, { useState, useEffect } from "react";
import axios from "axios";
import { getRandomDimension } from "./utils/random";
import LocationForm from './component/LocationForm';
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
    <main className="relative min-h-screen bg-[url(./src/assets/RickAndMorty_BigBg000.jpg)] bg-bottom bg-cover">
      <img src="src/assets/logo.png"></img>
      {/* <img className="absolute h-[calc(100vh/3)] -z-10 w-full bg-cover top-0"  src="./src/assets/RickAndMorty_BigBg001.png" />
      <img className="absolute bottom-1/2 -z-10 w-full h-[calc(100vh/3)] bg-cover translate-y-1/2" src="./src/assets/RickAndMorty_BigBg002.png" />
      <img className="absolute -z-10 w-full h-[calc(100vh/3)] bg-cover bottom-0 " src="./src/assets/RickAndMorty_BigBg003.png" /> */}

      <section className="z-10">
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
