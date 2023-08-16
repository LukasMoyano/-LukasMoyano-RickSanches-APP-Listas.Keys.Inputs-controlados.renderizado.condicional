import React from "react";

export const LocationForm = () => {
  return (
    <form onSubmit={handleSumit}>
      <input type="number" placeholder="Type a location id..." className="" min="{1}"  id="" />
      <button>Search</button>
    </form>
  );
};
