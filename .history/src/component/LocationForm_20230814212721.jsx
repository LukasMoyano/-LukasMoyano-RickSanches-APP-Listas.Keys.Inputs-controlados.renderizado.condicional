import React from "react";

export const LocationForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}      className="mx-auto overflow-hidden flex justify-between w-[300px] rounded-full bg-white" >

      <input className="w-2/3 pl-6"
        min={1}
        max={126}
        placeholder="Type a location id..."
        type="number"
        id="newLocation"
      />
      <button className="p-2 rounded-full w-1/3 bg-yellow-500 ">Search</button>
    </form>
  );
};
