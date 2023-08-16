import React from 'react';
import ResidentInfo from './ResidentInfo'; // Asegúrate de importar ResidentInfo desde la ubicación correcta

const LocationInfo = ({ currentLocation }) => {
  if (!currentLocation) {
    return <div>Loading...</div>; // O cualquier otro indicador de carga que desees mostrar
  }

  const { name, type, dimension, residents } = currentLocation;

  return (
    <div className="bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-500 rounded-md p-4">
      <h4 className="text-center text-3xl font-bold mb-4">{name}</h4>      
      <p>Type: {type}</p>
      <p>Dimesion: {dimension}</p>
      <p>Population: {residents?.length || 0}</p>

      <h3 className="text-xl font-bold mt-4">Residentes:</h3>
      {residents?.map((residentUrl) => (
        <ResidentInfo key={residentUrl} residentUrl={residentUrl} />
      ))}
    </div>
  );
};

export default LocationInfo;
Asegúrate de reemplazar ResidentInfo con el nombre del componente que estás utilizando para mostrar información de los residentes. Además, si deseas personalizar el mensaje de carga en lugar de "Loading...", puedes modificar el valor dentro del componente de carga condicional.




