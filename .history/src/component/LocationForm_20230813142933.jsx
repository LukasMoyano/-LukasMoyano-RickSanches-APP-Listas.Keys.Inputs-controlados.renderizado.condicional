import React from "react";

export const LocationForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}      className="flex p-2 w-[300px] rounded-full bg-white" >

      <input
        min={1}
        max={126}
        placeholder="Type a location id..."
        type="number"
        id="newLocation"
      />
      <button className="bg-yellow-500 ">Search</button>
    </form>
  );
};
