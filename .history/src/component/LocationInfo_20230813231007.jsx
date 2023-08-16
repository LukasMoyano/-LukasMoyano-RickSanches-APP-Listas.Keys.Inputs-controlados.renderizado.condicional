import React from "react";

export const LocationInfo = ({ currentLocation }) => {
  const { name, type, dimension, residents } = location;

  return (
    <section className="grid ">
      <h2 className="">{name}</h2>
      <ul>
        <p ClassName="mx-auto overflow-hidden flex justify-between w-[450px] h-[471px] top-[3260px] left-[673px] rounded-full bg-white">Type: {currentLocation?.type}</p>
        <p>Dimension: {currentLocation?.dimension}</p>
        <p>Population: {currentLocation?.residents.length}</p>
      </ul>
    </section>
  );
};
