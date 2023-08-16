export const LocationInfo = ({ currentLocation }) => {
  const { name, type, dimension, residents } = location;

  return (
    <section className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <h2 className="">{name}</h2>
      <ul className="relative min-h-screen bg-[url(.public/images/card/bg001_BOX1.png"> 
        <p className="">Type: {currentLocation?.type}</p>
        <p className="">Dimension: {currentLocation?.dimension}</p>
        <p className="">Population: {currentLocation?.residents.length}</p>
      </ul>
    </section>
  );
};
