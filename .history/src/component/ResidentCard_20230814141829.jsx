import axios from "axios";
import React, { useEffect, useState } from "react";

const ResidentCard = ({ residentUrl }) => {
  const [residentInfo, setResidentInfo] = useState();

  const statusresidentinfo = {
    Alive: "bg-green-500",
    Dead: "bg-red-500",
    unknown: "bg-slate-500",
  };

  useEffect(() => {
    axios
      .get(residentUrl)
      .then(({ data }) => setResidentInfo(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <article className="flex flex-col justify-center relative h-[400px] w-[450px]">
      <header className=" absolute bottom-[280px] z-30   w-full ">
        <img
          className="mx-auto -mt-8 w-[200px] aspect-square rounded-full"
          src={residentInfo?.image}
          alt=""
        />
        <div className="flex item-center p-2">
          <div
            className={`flex items-center justify-center h-14 aspect-square rounded-full ${
                statusresidentinfo[residentInfo?.status]
              }`}
          >
            {residentInfo?.status}
          </div>
        </div>
      </header>
      <section className=" h-[320px] relative top-0 bg-cover w-full bg-[url(./src/assets/targeta001.png)]">
        <h3 className="t right-1/2 translate-x-1/2  absolute">
          Name: {residentInfo?.name}
        </h3>
        <ul className="absolute top-40 right-1/2 translate-x-1/2">
          <li>Species: {residentInfo?.spacies} </li>
          <li>origin:{residentInfo?.origin.name}</li>
          <li>Times Appear:{residentInfo?.episode.length}</li>
        </ul>
      </section>
    </article>
  );
};

export default ResidentCard;
