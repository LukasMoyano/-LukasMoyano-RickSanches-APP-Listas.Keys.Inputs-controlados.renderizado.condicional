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
    <article className=" flex-wrap justify-center relative h-[320px] w-[320px] transform scale-100 transition-transform ease-in-out duration-300 hover:scale-90 grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
      {/* Encabezado de la tarjeta */}
      <header className="absolute bottom-[280px] z-30 w-full">
        {/* Imagen del residente */}
        <img
          className="mx-auto mt-8 w-[200px] aspect-square rounded-full border-8 border-[#893446]"
          src={residentInfo?.image}
          alt=""
        />
      </header>
      {/* Sección principal de la tarjeta */}t{" "}
      <section className="relative h-[320px] w-[320px] top-0 bg-cover bg-[url(./src/assets/targea001.png)]">
        {/* Nombre del residente */}
        <h3 className="top-10 right-1/2 translate-x-1/2 absolute text-[#893446] text-center font-Creepster text-3xl font-bold">
          {residentInfo?.name}
        </h3>

        {/* Círculo que muestra el estado del residente */}
        <div className="flex items-center pl-5 pt-10">
          <div
            className={`aspect-square rounded-full border-2  border-spacing-1 flex items-center justify-center capitalize p-1 ${
              statusresidentinfo[residentInfo?.status]
            }`}
          >
            {residentInfo?.status}
          </div>
        </div>
        <section className="grid grid-cols-2 grid-rows-3 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      
      {/* Primera fila */}
      <div className="flex flex-col">
        <h2 className="font-nunito text-2xl font-semibold text-[#893446] mb-1">
          Species:
        </h2>
        <h3 className="font-nunito text-lg font-medium text-[rgb(255,255,255)]">
          {residentInfo?.species}
        </h3>
      </div>

      
      {/* Segunda fila */}
      <div className="flex flex-col">
        <h2 className="font-nunito text-xl font-semibold text-[#893446] mb-1">
          Origin:
        </h2>
        <h3 className="font-nunito text-base font-medium text-[rgb(255,255,255)]">
          {residentInfo?.origin.name}
        </h3>
      </div>

      
      {/* Tercera fila */}
      <div className="flex flex-col">
        <h2 className="font-nunito text-xl font-semibold text-[#893446] mb-1">
          Times Appear:
        </h2>
        <h3 className="font-nunito text-base font-medium text-[rgb(255,255,255)]">
          {residentInfo?.episode.length}
        </h3>
      </div>

    </section>
      </section>
    </article>
  );
};

export default ResidentCard;
