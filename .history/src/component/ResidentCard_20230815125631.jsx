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
    // Componente principal de la tarjeta de información del residente
    <article className="flex-wrap justify-center relative w-[320px] aspect-square transform scale-100 transition-transform ease-in-out duration-300 hover:scale-90">
      {/* Encabezado de la tarjeta */}
      <header className="absolute inset-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30 w-full">
        {/* Imagen del residente */}
        <img
          className="mx-auto mt-8 w-[160px] aspect-square rounded-full border-8 border-[#893446]"
          src={residentInfo?.image}
          alt=""
        />
        {/* Contenedor para mostrar el estado del residente */}
        <div className="flex item-center p-2">
          <div
            className={`flex items-center justify-center h-14 aspect-square rounded-full ${
              statusresidentinfo[residentInfo?.status]
            }`}
          >
            {residentInfo?.status}
          </div>
        </div>
      </header>
  
      {/* Sección principal de la tarjeta */}
      <section className="h-[320px] relative bg-cover w-full bg-[url(./src/assets/targeta001.png)]">
        {/* Nombre del residente */}
        <h3 className="top-10 right-1/2 translate-x-1/2 absolute text-[#893446] text-center font-nunito text-3xl font-bold">
          {residentInfo?.name}
        </h3>
  
        {/* Detalles del residente */}
        <section>
          {/* Lista de detalles en forma de rejilla */}
          <ul className="grid grid-cols-2 rows-3 absolute top-40 right-1/2 translate-x-1/2">
            {/* Especie del residente */}
            <li>
              <span className="capitalize font-bold text-[#893446]">
                Species:
              </span>
              <span className="text-[rgb(255,255,255)]">
                {residentInfo?.species}
              </span>
            </li>
            {/* Origen del residente */}
            <li>
              <span className="text-[#893446] font-bold">Origin:</span>
              <span className="text-[rgb(255,255,255)]">
                {residentInfo?.origin.name}
              </span>
            </li>
            {/* Cantidad de apariciones del residente en episodios */}
            <li>
              <span className="text-[#893446] font-bold">Times Appear:</span>
              <span className="text-[rgb(255,255,255)]">
                {residentInfo?.episode.length}
              </span>
            </li>
          </ul>
        </section>
      </section>
    </article>
  );
  
  
};

export default ResidentCard;
