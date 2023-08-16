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

    fetchDimension(newLocation)

    };

    const fetchDimension = (idLocation) => {
const url = `https://rickandmortyapi.com/api/location/`;








  useEffect(() => {
    const randomDimension = getRadonDimension(126)
    fetchDimension(randomDimDimension)

}, []);


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
