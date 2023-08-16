import React from 'react';
import ResidentInfo from './ResidentInfo'; // Asegúrate de que la ruta sea correcta

export const LocationInfo = ({ currentLocation }) => {
  const { name, type, dimension, residents } = currentLocation || {};

  return (
    <div className="bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-500 rounded-md p-4">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>Number of Residents: {residents?.length || 0}</p>
      <h3 className="text-xl font-bold mt-4">Residents:</h3>
      {residents?.map((residentUrl) => (
        <ResidentInfo key={residentUrl} residentUrl={residentUrl} />
      ))}
    </div>
  );
};
