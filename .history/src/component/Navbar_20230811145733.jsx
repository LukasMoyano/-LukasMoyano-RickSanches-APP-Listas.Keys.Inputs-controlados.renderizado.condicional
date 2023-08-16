import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import '../../App.css';
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
      <div className="container">
        {/* RyM Logo */}
        <Link to='/' className='fs-3 fw-bold navbar-brand'>
          Rick y Morty <span className='ph2'>API</span>
        </Link>

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
            button[aria-expanded="false"] > .close{
              display: none;
            }

            button[aria-expanded="true"] > .open{
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
            <NavLink activeClassName='active' to='/' className='nav-link'>Personajes</NavLink>
            <NavLink to='/episodes' className='nav-link'>Episodios</NavLink>
            <NavLink to='/location' className='nav-link'>Localidad</NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;