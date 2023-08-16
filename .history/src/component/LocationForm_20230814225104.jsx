import React from "react";

export const LocationForm = ({handleSubmit}) => {
  return (
    <form onSubmit={handleSubmit}      className="mx-auto overflow-hidden flex justify-between w-[300px] rounded-full bg-white" >

      <input className="w-2/3 pl-2"
        min={1}
        max={126}
        placeholder="Type a location id..."
        type="number"
        id="newLocation"
      />
<button className="">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M2 30C2 14.536 14.536 2 30 2H147C162.464 2 175 14.536 175 30C175 45.464 162.464 58 147 58H30C14.536 58 2 45.464 2 30Z"
      fill="#FEEF66"
      stroke="#893446"
      strokeWidth="4"
    />
  </svg>
  <span className="text-white font-bold text-lg">
    Let's Go Morty, ¡GOOOOO!
  </span>
</button>
    </form>
  );
};
