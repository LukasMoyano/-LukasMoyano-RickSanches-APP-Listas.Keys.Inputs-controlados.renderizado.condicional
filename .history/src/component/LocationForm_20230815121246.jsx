import React from "react";

export const LocationForm = ({ handleSubmit }) => {
  return (
    <main>
      <section className="py-10 mx-auto">



   {/* Formulario para ingresar un ID de ubicación */}
    <form onSubmit={handleSubmit} className="mx-auto overflow-hidden flex justify-between w-[300px] rounded-full bg-white">

      {/* Entrada para el ID de ubicación */}
      <input
        className="text-4xl p-3 w-2/3 pl-2" // Ancho del 2/3 del formulario, padding izquierdo de 2
        min={1} // Valor mínimo permitido
        max={126} // Valor máximo permitido
        placeholder="Type a location id..." // Placeholder en la entrada
        type="number" // Tipo de entrada numérica
        id="newLocation" // ID del elemento
      />
      
      {/* Botón para enviar el formulario */}
      <button className="p-2 text-lg text-center p-2 rounded-full border-[#893446] border-8 w-1/3 bg-yellow-400">
        Let's Go Morty!
      </button>
    </form>
    </section>
    </main>
  );
};
