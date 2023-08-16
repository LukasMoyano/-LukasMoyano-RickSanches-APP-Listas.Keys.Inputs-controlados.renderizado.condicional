import React, { useState, useEffect } from "react";
import axios from "axios";
import { getRandomDimension } from "./utils/random";
import { LocationForm } from "./component/LocationForm";
import { ResidentList } from "./component/ResidentList";
import { LocationInfo } from "./component/LocationInfo";
import Pagination from "./component/Pagination";

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
    <main className="relative min-h-screen">
      {/* Fondo de pantalla */}
      <div
        className="absolute inset-0 bg-[url(./src/assets/RickAndMorty_BigBg000.jpg)] bg-cover bg-center"
        style={{ zIndex: -1 }}
      ></div>
      
      <img src="src/assets/logo.png" alt="Logo"></img>
      
      <section className="relative z-10">
        <div>
          <div className="">
            <LocationForm handleSubmit={handleSubmit} />
          </div>
          <div>
            <LocationInfo currentLocation={currentLocation} className="" />
          </div>
          {/* ResidentList */}
          <div className="">
            <div>
              <ResidentList residents={currentLocation?.residents ?? []} />
            </div>
          </div>
          {/* Paginación */}
          <div className="flex justify-center items-center space-x-4 my-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
            <button
              className={classnames(
                "rounded-full border-[#893446] w-12 h-12 border-8 text-center font-nunito text-2xl text-[#893446] btn btn-primary prev",
                {
                  "opacity-50 pointer-events-none": currentPage === 1,
                }
              )}
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              &lt;
            </button>
            <button
              className={classnames(
                "rounded-full border-[#893446] w-12 h-12 border-8 text-center font-nunito text-2xl text-[#893446] btn btn-primary next",
                {
                  "opacity-50 pointer-events-none": currentPage === totalPages,
                }
              )}
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
