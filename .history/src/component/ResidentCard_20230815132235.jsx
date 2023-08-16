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
    <article className="flex flex-col items-center relative w-[320px] transform scale-100 transition-transform ease-in-out duration-300 hover:scale-90">
      <div className="relative w-full">
        {/* Encabezado de la tarjeta */}
        <div className="absolute inset-0 z-10">
          {/* Imagen del residente */}
          <img
            className="w-[200px] h-[200px] rounded-full border-8 border-[#893446] mx-auto mt-8"
            src={residentInfo?.image}
            alt=""
          />
          {/* Estado del residente */}
          <div className={`h-14 w-14 absolute -bottom-1/2 -left-1/2 transform -translate-x-1/2 ${
            statusresidentinfo[residentInfo?.status]
          } flex items-center justify-center rounded-full`}>
            {residentInfo?.status}
          </div>
        </div>
      </div>

      {/* Sección principal de la tarjeta */}
      <section className="relative w-full h-[320px] bg-cover">
        {/* Nombre del residente */}
        <h3 className="absolute top-10 left-1/2 transform -translate-x-1/2 text-[#893446] text-center font-nunito text-3xl font-bold">
          {residentInfo?.name}
        </h3>

        {/* Detalles del residente */}
        <ul className="absolute grid grid-cols-2 gap-4 top-40 left-1/2 transform -translate-x-1/2">
          <Detail label="Species" value={residentInfo?.species} />
          <Detail label="Origin" value={residentInfo?.origin.name} />
          <Detail label="Times Appear" value={residentInfo?.episode.length} />
        </ul>
      </section>
    </article>
  );
};

// Componente para los detalles
const Detail = ({ label, value }) => (
  <li className="flex items-center text-[rgb(255,255,255)]">
    <span className="font-bold text-[#893446]">{label}:</span>
    <span className="ml-2 capitalize">{value}</span>
  </li>
);