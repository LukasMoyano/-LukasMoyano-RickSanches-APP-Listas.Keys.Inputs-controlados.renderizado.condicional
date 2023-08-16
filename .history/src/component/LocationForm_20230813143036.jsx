import React from "react";

export const LocationForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}      className="flex justify-between w-[300px] rounded-full bg-white" >

      <input
        min={1}
        max={126}
        placeholder="Type a location id..."
        type="number"
        id="newLocation"
      />
      <button className="p-2 rounded-full bg-yellow-500 ">Search</button>
    </form>
  );
};
