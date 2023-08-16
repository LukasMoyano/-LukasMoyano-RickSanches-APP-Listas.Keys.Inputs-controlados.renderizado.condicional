import React from "react";

export const LocationForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSumit}>
      <input
        className="text-black"
        min={1}
        max={126}
        placeholder="Type a location id..."
        type="number"
        id=""
      />
      <button>Search</button>
    </form>
  );
};
