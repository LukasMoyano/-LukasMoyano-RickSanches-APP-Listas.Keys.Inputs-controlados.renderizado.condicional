import React from "react";

export const LocationInfo = ({ currentLocation }) => {
  const { name, type, dimension, residents } = location;

  return (
    <section className="bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-500 rounded-md p-4">
      <h2 className="text-center text-3xl font-bold mb-4">{name}</h2>
      <ul>
        <p>Tipo: {type}</p>
        <p>Dimensión: {dimension}</p>
        <p>Cantidad de residentes: {residents.length}</p>
      </ul>
    </section>
  );
};
