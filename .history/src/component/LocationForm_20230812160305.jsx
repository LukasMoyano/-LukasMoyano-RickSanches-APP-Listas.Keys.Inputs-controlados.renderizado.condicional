import React from "react";

export const LocationForm = () => {
  return (
    <form onSubmit={handleSumit}>
      <input type="number" placeholder="Type a location id..." className="text-black" min="{1}" max={126}  id="" />
      <button>Search</button>
    </form>
  );
};
