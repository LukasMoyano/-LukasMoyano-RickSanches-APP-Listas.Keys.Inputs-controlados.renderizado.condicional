export const LocationInfo = ({ currentLocation }) => {
  const { name, type, dimension, residents } = location;

  return (
    <div className="bg-white p-4 rounded">
      <h2 className="text-2xl font-bold mb-4">{name}</h2>
      <p>Tipo: {type}</p>
      <p>Dimensión: {dimension}</p>
      <p>Cantidad de residentes: {residents?.length || 0}</p>
      <h3 className="text-xl font-bold mt-4">Residentes:</h3>
      {residents?.map((residentUrl) => (
        <ResidentInfo key={residentUrl} residentUrl={residentUrl} />
      ))}
    </div>
  );
};
