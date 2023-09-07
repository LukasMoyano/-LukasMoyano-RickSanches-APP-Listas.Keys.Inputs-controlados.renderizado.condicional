import React, { useState, useEffect } from 'react';

// Componente que muestra información sobre un residente
const ResidentInfo = ({ residentUrl }) => {
  // Estado para almacenar los datos del residente
  const [residentData, setResidentData] = useState(null);

  // Efecto de carga para obtener los datos del residente
  useEffect(() => {
    // Realiza una solicitud para obtener los datos del residente
    fetch(residentUrl)
      .then(response => response.json())
      .then(data => setResidentData(data))
      .catch(error => console.error('Error fetching resident data:', error));
  }, [residentUrl]);

  // Si los datos del residente aún no se han cargado, muestra un mensaje de carga
  if (!residentData) {
    return <p>Loading resident data...</p>;
  }

  // Extrae los atributos relevantes de los datos del residente
  const { name, status, species, gender } = residentData;

  // Renderiza la información del residente en un div con dimensiones específicas
  return (
    <div className="h-[320px] w-[320px]">
      <h4>{name}</h4>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default ResidentInfo;
