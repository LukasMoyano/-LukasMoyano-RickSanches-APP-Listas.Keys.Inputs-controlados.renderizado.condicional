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
//ponlo en relative lo que quieres que se vea al frente y absolute lo que quieres atras
//lo que coloques de primero en absolute ba a ser lo que quede al fondo lo que
//coloques de segundo en absolu va  a ser lo que quede adelante
  return (
    <main className="relative min-h-screen bg-[url(./src/assets/RickAndMorty_BigBg000.jpg)] bg-b bg-cover">
      <img src="src/assets/logo.png"></img>
      <section className="">
        <div>
          <div className=>
            <LocationForm handleSubmit={handleSubmit} />
          </div>
          <div>
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
