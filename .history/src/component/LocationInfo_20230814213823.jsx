export const LocationInfo = ({ currentLocation }) => {
  const { name, type, dimension, residents } = location;

  return (
    <div className="bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-500 rounded-md p-4 bg-white">
      <h4 className="text-center text-3xl font-bold mb-4">{name}</h4>      <p>Tipo: {type}</p>
      <p>Dimensión: {dimension}</p>
      <p>Cantidad de residentes: {residents?.length || 0}</p>

      <h3 className="text-xl font-bold mt-4">Residentes:</h3>
      {residents?.map((residentUrl) => (
        <ResidentInfo key={residentUrl} residentUrl={residentUrl} />
      ))}
    </div>
  );
};
