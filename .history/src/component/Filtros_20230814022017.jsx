import React, { useState } from 'react';
import classnames from 'classnames';

const FilterBtn = ({ name, index, items, task, setPageNumber }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = () => {
    setPageNumber(1);
    task(items);
    setChecked(true);
  };

  return (
    <div>
      <div className='form-check'>
        <input
          onClick={handleChange}
          className='form-check-input'
          type='radio'
          name={name}
          id={`${name}-${index}`}
          checked={checked}
        />
        <label className={classnames('btn btn-outline-primary', {
          'bg-blue-500 text-white': checked
        })} htmlFor={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

const Filtros = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  const clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };

  const status = ['Alive', 'Dead', 'Unknown'];
  const species = [
    'Human', 'Alien', 'Humanoid', 'Poopybutthole',
    'Mythological', 'Unknown', 'Animal', 'Disease',
    'Robot', 'Cronenberg', 'Planet'
  ];
  const genders = ['Male', 'Female', 'Genderless', 'Unknown'];

  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className='text-center font-bold mb-2'>Filtros</div>
      <div
        onClick={clear}
        style={{ cursor: 'pointer' }}
        className='text-center text-primary underline mb-4'
      >
        Borrar Filtros
      </div>
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
            <div className='accordion-body d-flex flex-wrap gap-3'>
              {status.map((items, index) => (
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
            <div className='accordion-body d-flex flex-wrap gap-3'>
              {species.map((items, index) => (
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
            <div className='accordion-body d-flex flex-wrap gap-3'>
              {genders.map((items, index) => (
                <FilterBtn
                  task={setGender}
                  setPageNumber={setPageNumber}
                  key={items}
                  name={'gender'}
                  index={index}
                  items={items}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filtros;
