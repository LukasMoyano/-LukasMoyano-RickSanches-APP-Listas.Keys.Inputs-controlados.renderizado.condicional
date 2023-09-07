import React, { useState, useEffect } from "react";
import axios from "axios";
import { getRandomDimension } from "./utils/random";
import { LocationForm } from "./component/LocationForm";
import { ResidentList } from "./component/ResidentList";
import { LocationInfo } from "./component/LocationInfo";

function App() {
  const [currentLocation, setCurrentLocation] = useState(null);

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    const newLocation = e.target[0].value;

    fetchDimension(newLocation);
  };

  // Función para obtener la información de ubicación
  const fetchDimension = (idLocation) => {
    const url = `https://rickandmortyapi.com/api/location/${idLocation}`;
    axios
      .get(url)
      .then(({ data }) => setCurrentLocation(data))
      .catch((error) => console.log(error));
  };

  // Efecto para cargar una ubicación aleatoria al cargar la página
  useEffect(() => {
    const randomDimension = getRandomDimension(126);
    fetchDimension(randomDimension);
  }, []);

  return (
    <main className="relative min-h-screen bg-[url(/public/RickAndMorty_BigBg000.jpg)] bg-b bg-cover">


      
      {/* Logo */}
      <img src="/logo.png" alt="Logo"></img>
      <section className="">
        <div>
          {/* Formulario para buscar ubicación */}
          <div>
            <LocationForm handleSubmit={handleSubmit} />
          </div>
          <div>
            {/* Información de la ubicación actual */}
            <LocationInfo currentLocation={currentLocation} />
          </div>
          <div className="mt-4 mx-8">
            <div>
              {/* Lista de residentes de la ubicación actual */}
              <ResidentList residents={currentLocation?.residents ?? []} />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
