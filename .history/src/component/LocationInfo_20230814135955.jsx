export const LocationInfo = ({ currentLocation }) => {
  const { name, type, dimension, residents } = location;

  return (
    <section className="">
      <h2 className="">{name}</h2>
      <ul className=""> 
        <p className="">Type: {currentLocation?.type}</p>
        <p className="">Dimension: {currentLocation?.dimension}</p>
        <p className="">Population: {currentLocation?.residents.length}</p>
      </ul>
    </section>
  );
};
