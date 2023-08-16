import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState();

  const statusresidentinfo = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    // Artículo que contiene toda la tarjeta de información
    <article className=" absolute flex-wrap justify-center relative h-[320px] w-[320px] transform scale-100 transition-transform ease-in-out duration-300 hover:scale-90">
      {/* Encabezado de la tarjeta */}
      <header className="relativo z-30 w-full">
        {/* Imagen del residente */}
        <img
          className="mt-52 mx-auto w-[200px] aspect-auto rounded-3xl border-8 border-[#893446]"
          src={residentInfo?.image}
          alt=""
        />
      </header>

      {/* Sección principal de la tarjeta */}
      <section className="relative h-[320px] w-[320px] top-0 bg-cover bg-[url(./src/assets/targeta001.png)]">
        {/* Nombre del residente */}
        <h3 className="top-10 right-1/2 translate-x-1/2 absolute text-[#893446] text-center font-Creepster text-3xl font-bold">
          {residentInfo?.name}
        </h3>

        {/* Círculo que muestra el estado del residente */}
        <div className="absolute flex items-center pl-5 pt-10">
          <div
            className={`aspect-square rounded-full border-2  border-spacing-1 flex items-center justify-center capitalize p-1 ${
              statusresidentinfo[residentInfo?.status]
            }`}
          >
            {residentInfo?.status}
          </div>
        </div>

        <section className="absolute grid grid-cols-2 grid-rows-3 absolute top-32 left-4">
  {/* Especie del residente */}
  <div className="flex flex-col">
    <h2 className="capitalize font-bold text-[#893446]">Species:</h2>
    <h3 className="text-[rgb(255,255,255)]">{residentInfo?.species}</h3>
  </div>

  {/* Origen del residente */}
  <div className="flex flex-col">
    <h2 className="text-[#893446] font-bold">Origin:</h2>
    <h3 className="text-[rgb(255,255,255)]">{residentInfo?.origin.name}</h3>
  </div>

  {/* Cantidad de apariciones del residente en episodios */}
  <div className="flex flex-col">
    <h2 className="text-[#893446] font-bold">Times Appear:</h2>
    <h3 className="text-[rgb(255,255,255)]">{residentInfo?.episode.length}</h3>
  </div>
</section>

      </section>
    </article>
  );
};

export default ResidentCard;
