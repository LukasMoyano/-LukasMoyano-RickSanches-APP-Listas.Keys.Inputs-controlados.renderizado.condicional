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
      <img src="src/assets/logo.png"></img>
      <section className="">
        <div>
          <div className="absolute">
            <LocationForm handleSubmit={handleSubmit} />
          </div>
          <div className="absolute">
            <LocationInfo currentLocation={currentLocation} className="" />
          </div>
          <div className="mt-4 mx-8">
            <div>
              <ResidentList residents={currentLocation?.residents ?? []} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
