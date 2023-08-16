import { useDispatch } from 'react-redux';
import { resetFilters } from '../actions/filterActions';
import React from 'react';
import FilterBtn from './FilterBtn';

const Filtros = ({ setStatus, setPageNumber, setGender, setSpecies }) => {
  const dispatch = useDispatch();

  let clear = () => {
    setStatus("");
    setPageNumber("");
    setGender("");
    setSpecies("");
    dispatch(resetFilters());
  };

  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className="text-center font-bold mb-2 text-lg">Filtros</div>

      <div
        onClick={clear}
        className='text-center text-primary underline mb-4 cursor-pointer'
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
            <div className='accordion-body grid grid-cols-3 gap-2'>
              {statusOptions.map((items, index) => (
                <FilterBtn
                  task={setStatus}
                  setPageNumber={setPageNumber}
                  key={items}
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
              {speciesOptions.map((items, index) => (
                <FilterBtn
                  task={setSpecies}
                  setPageNumber={setPageNumber}
                  key={items}
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
              {genderOptions.map((items, index) => (
                <FilterBtn
                  task={setGender}
                  setPageNumber={setPageNumber}
                  key={items}
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

const statusOptions = ['Alive', 'Dead', 'Unknown'];
const speciesOptions = [
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
];
const genderOptions = ['Male', 'Female', 'Genderless', 'Unknown'];

export default Filtros;