import React, { useContext, useState } from 'react';
import { PlanetsContext } from '../context/PlanetContext';
import { valuesDefinitions, keysFilter } from '../utils/KeysFilter';

const Select = () => {
  const { setFilter, AdicionarFiltros } = useContext(PlanetsContext);
  const [keys, setKeys] = useState({
    column: keysFilter[0],
    comparison: 'maior que',
    value: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setKeys({ ...keys, [name]: value });
  };

  const handleSubmit = () => {
    setFilter(keys);
    AdicionarFiltros(keys);
    const index = keysFilter.indexOf(keys.column);
    keysFilter.splice(index, 1);
    setKeys({
      ...keys,
      column: keysFilter[0],
    });
  };

  return (
    <div>
      <select
        data-testid="column-filter"
        value={ keys.column }
        onChange={ handleChange }
        name="column"
      >
        {keysFilter.map((item, index) => (
          <option key={ index }>{item}</option>
        ))}
      </select>
      <select
        data-testid="comparison-filter"
        value={ keys.comparison }
        onChange={ handleChange }
        name="comparison"
      >
        {valuesDefinitions.map((item, index) => (
          <option key={ index }>{item}</option>
        ))}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        value={ keys.value }
        onChange={ handleChange }
        name="value"
      />
      <button type="button" data-testid="button-filter" onClick={ handleSubmit }>
        Aplicar
      </button>
    </div>
  );
};

export default Select;
