import React from 'react';

const FilterBtn = ({ name, index, items, task, setPageNumber }) => {
  return (
    <div>
      {/* Estilos para resaltar el botón seleccionado */}
      <style jsx>
        {`
        .x:checked + label{
          background-color: #0b5ed7;
          color: white;
        }

        input[type="radio"]{
          display: none;
        }
        `}
      </style>

      <div className='form-check'>
        {/* Botón de selección del filtro */}
        <input
          onClick={() => {
            setPageNumber(1);
            task(items);
          }}
          className='form-check-input x'
          type='radio'
          name={name}
          id={`${name}-${index}`}
        />
        <label class='btn btn-outline-primary' for={`${name}-${index}`}>
          {items}
        </label>
      </div>
    </div>
  );
};

export default FilterBtn;