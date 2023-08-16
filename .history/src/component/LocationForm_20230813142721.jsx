import React from "react";

export const LocationForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}>
      <input
        className="p-2 "
        min={1}
        max={126}
        placeholder="Type a location id..."
        type="number"
        id="newLocation"
      />
      <button>Search</button>
    </form>
  );
};
