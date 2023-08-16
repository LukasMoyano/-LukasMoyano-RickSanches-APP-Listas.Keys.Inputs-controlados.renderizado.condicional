import React, { useState, useEffect } from 'react';

const ResidentInfo = ({ residentUrl }) => {
  const [residentData, setResidentData] = useState(null);

  useEffect(() => {
    // Aquí puedes realizar una solicitud HTTP para obtener los datos del residente utilizando residentUrl
    // Ejemplo:
    fetch(residentUrl)
      .then(response => response.json())
      .then(data => setResidentData(data))
      .catch(error => console.error('Error fetching resident data:', error));
  }, [residentUrl]);

  if (!residentData) {
    return <p>Loading resident data...</p>;
  }

  const { name, status, species, gender } = residentData;

  return (
    <div className="resident-info">
      <h4>{name}</h4>
      <p>Status: {status}</p>
      <p>Species: {species}</p>
      <p>Gender: {gender}</p>
    </div>
  );
};

export default ResidentInfo;