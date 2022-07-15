import React, { useContext, useState } from 'react';
import PlanetContext from '../context/PlanetContext';
import { keysFilter } from '../utils/KeysFilter';

const Order = () => {
  const { setOrdenation } = useContext(PlanetContext);
  const [keys, setKeys] = useState({
    column: 'population',
    comparison: 'ASC',
  });
  const handleChange = ({ target: { name, value } }) => {
    setKeys({ ...keys, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOrdenation(keys);
  };

  return (
    <div style={ { display: 'flex', gap: '1rem', margin: '1rem 0' } }>
      <select
        data-testid="column-sort"
        value={ keys.column }
        onChange={ handleChange }
        name="column"
      >
        {keysFilter.map((item, index) => (
          <option key={ index }>{item}</option>
        ))}
      </select>
      <div>
        <input
          type="radio"
          name="comparison"
          value="ASC"
          data-testid="column-sort-input-asc"
          checked={ keys.comparison === 'ASC' }
          onChange={ handleChange }
        />
        Ascendente
      </div>
      <div>
        <input
          type="radio"
          name="comparison"
          value="DESC"
          data-testid="column-sort-input-desc"
          checked={ keys.comparison === 'DESC' }
          onChange={ handleChange }
        />
        Descendente
      </div>
      <button data-testid="column-sort-button" onClick={ handleSubmit } type="button">
        Ordenar
      </button>
    </div>
  );
};

export default Order;
