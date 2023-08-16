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
      <section className="z-10">
        <div>
          <div className="flex justify-center mx-8 h-1">
            <LocationForm handleSubmit={handleSubmit} />
          </div>
          <div>
            <LocationInfo currentLocation={currentLocation} className="" />
          </div>
          <div className="mt-48 mx-8 width-min-[320px]">
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
