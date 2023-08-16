import React from "react";

export const LocationInfo = ({ currentLocation }) => {
  const { name, type, dimension, residents } = location;

  return (
    <section className=" ">
      <h2 className="">{name}</h2>
      <ul>
        <p ClassName="">Type: {currentLocation?.type}</p>
        <p ClassName="">Dimension: {currentLocation?.dimension}</p>
        <p ClassName="">Population: {currentLocation?.residents.length}</p>
      </ul>
    </section>
  );
};
