import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const LocationForm = ({ handleSubmit }) => {
  return (
    <div>
      {/* Navbar Component */}
      <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
        <div className="container">
          {/* RyM Logo */}
          <a href='/' className='fs-3 fw-bold navbar-brand'>
            Rick y Morty <span className='ph2'>API</span>
          </a>

          {/* Botón colapsable */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Iconos de FontAwesome para el botón de alternar */}
            <style jsx>
              {`
                button[aria-expanded="false"] > .close {
                  display: none;
                }

                button[aria-expanded="true"] > .open {
                  display: none;
                }
              `}
            </style>
            <FontAwesomeIcon className='open fw-bold text-dark' icon={faBars} />
            <FontAwesomeIcon className='close fw-bold text-dark' icon={faXmark} />
          </button>

          {/* Contenido de la barra de navegación */}
          <div
            className='collapse navbar-collapse justify-content-end'
            id='navbarNavAltMarkup'>

            <div className='navbar-nav fs-'>
              {/* Enlaces de navegación */}
              <a href='/' className='nav-link'>Personajes</a>
              <a href='/episodes' className='nav-link'>Episodios</a>
              <a href='/location' className='nav-link'>Localidad</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Location Form */}
      <form
        onSubmit={handleSubmit}
        className="mx-auto overflow-hidden flex justify-between w-[300px] rounded-full bg-white"
      >
        <input
          className="w-2/3 pl-2"
          min={1}
          max={126}
          placeholder="Type a location id..."
          type="number"
          id="newLocation"
        />
        <button className="p-2 rounded-full w-1/3 bg-yellow-500">Search</button>
      </form>
    </div>
  );
};

export default LocationForm;
