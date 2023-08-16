import React from 'react';
import Gender from './Category/Gender';
import Species from './Category/Species';
import Status from './Category/Status';
import FilterBtn from './FilterBtn';

const Filtros = ({ setStatus, setPageNumber, setGender, setSpecies }) => {

  // Función para borrar los filtros y recargar la página
  let clear = () => {
    setStatus("")
    setPageNumber("")
    setGender("")
    setSpecies("")
    window.location.reload(false);
  };

  return (
    <div className='col-lg-3 col-12 mb-5'>
      {/* Título de los filtros */}
      <div className="text-center font-bold mb-2 text-lg">Filtros</div>

      {/* Enlace para borrar los filtros */}
      <div
        onClick={clear}
        style={{ cursor: 'pointer' }}
        className='text-center text-primary underline mb-4'
      >
        Borrar Filtros
      </div>

      {/* Contenedor de los filtros */}
      <div className='accordion' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseThree'
              aria-expanded='true'
              aria-controls='collapseThree'>
              Estado
            </button>
          </h2>
          <div
            id='collapseThree'
            className='accordion-collapse collapse show'
            data-bs-parent='#accordionExample'>
            <div className='accordion-body grid grid-cols-3 gap-2'>
              {/* Renderizado de los botones de filtro para cada estado */}
              {['Alive', 'Dead', 'Unknown'].map((items, index) => (
                <FilterBtn
                  task={setStatus}
                  setPageNumber={setPageNumber}
                  key={index}
                  name="status"
                  index={index}
                  items={items}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseTwo'
              aria-expanded='false'
              aria-controls='collapseTwo'
            >
              Especie
            </button>
          </h2>
          <div
            id='collapseTwo'
            className='accordion-collapse collapse'
            aria-labelledby='headingTwo'
            data-bs-parent='#accordionExample'
          >
            <div className='accordion-body grid grid-cols-3 gap-2'>
              {[
                'Human',
                'Alien',
                'Humanoid',
                'Poopybutthole',
                'Mythological',
                'Unknown',
                'Animal',
                'Disease',
                'Robot',
                'Cronenberg',
                'Planet',
              ].map((items, index) => (
                <FilterBtn
                  task={setSpecies}
                  setPageNumber={setPageNumber}
                  key={index}
                  name="species"
                  index={index}
                  items={items}
                />
              ))}
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseOne'
              aria-expanded='false'
              aria-controls='collapseOne'
            >
              Género
            </button>
          </h2>
          <div
            id='collapseOne'
            className='accordion-collapse collapse'
            data-bs-parent='#accordionExample'>

            <div className='accordion-body grid grid-cols-3 gap-2'>
              {/* Generando los botones de filtro para cada género */}
              {['Male', 'Female', 'Genderless', 'Unknown'].map((items, index) => (
                <FilterBtn
                  task={setGender}
                  setPageNumber={setPageNumber}
                  key={index}
                  name={'gender'}
                  index={index}
                  items={items} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtros;