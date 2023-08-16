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

    fetchDimension(newLocation);
  };

  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
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
    <main className="relative min-h-screen bg-[url(./src/assets/RickAndMorty_BigBg000.jpg)] bg-b bg-cover">
      <section className="grid place-items-center">
        <img src="src/assets/logo.png"></img>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 justify-center items-center h-screen">
          {/* Columna 1: LocationForm */}
          <div className="col-span-1 text-center">
            <LocationForm handleSubmit={handleSubmit} />
          </div>

          {/* Columna 2: LocationInfo y ResidentList */}
          <div className="col-span-1">
            <LocationInfo currentLocation={currentLocation} />
            <ResidentList residents={currentLocation?.residents ?? []} />
          </div>
        </section>
    </main>
  );
}

export default App;
