import React from "react";

export const LocationInfo = ({ currentLocation }) => {
  const { name, type, dimension, residents } = location;

  return (
    <section className="">
      <h2 className="">{name}</h2>
      <ul>
        <p>Type: {currentLocation?.type}</p>
        <p>Dimension: {currentLocation?.dimension}</p>
        <p>Population: {currentLocation?.residents.length}</p>
      </ul>
    </section>
  );
};
