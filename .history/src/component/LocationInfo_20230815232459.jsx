export const LocationInfo = ({ currentLocation }) => {
  const { name, type, dimension, residents } = currentLocation || {};

  return (
    <div className=" bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-500 rounded-md p-4">
      <h4 className="text-center text-3xl font-bold mb-4">{name}</h4>
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>Number of Residents: {residents?.length || 0}</p>
    </div>
  );
};
