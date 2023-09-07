// Componente para mostrar la información de una ubicación.
// Recibe la ubicación actual como prop y extrae sus detalles.
export const LocationInfo = ({ currentLocation }) => {
  const { name, type, dimension, residents } = currentLocation || {};

  return (
    // Div que contiene la información de la ubicación con un estilo de fondo degradado.
    <div className="bg-gradient-to-b from-yellow-400 via-pink-500 to-purple-500 rounded-md p-4">
      {/* Título del nombre de la ubicación, centrado y en negrita */}
      <h4 className="text-center text-3xl font-bold mb-4">{name}</h4>
      {/* Párrafos que muestran el tipo, dimensión y número de residentes de la ubicación */}
      <p>Type: {type}</p>
      <p>Dimension: {dimension}</p>
      <p>Number of Residents: {residents?.length || 0}</p>
    </div>
  );
};
