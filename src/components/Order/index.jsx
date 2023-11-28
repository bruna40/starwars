import React, { useContext, useState } from 'react';
import PlanetContext from '../../context/PlanetContext';
import { keysFilter } from '../../utils/KeysFilter';
import { OrderContainer, OrderRadio, OrderSelect } from './style';

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
    <OrderContainer>
      <OrderSelect
        data-testid="column-sort"
        value={ keys.column }
        onChange={ handleChange }
        name="column"
      >
        {keysFilter.map((item) => (
          <option key={ item }>{item}</option>
        ))}
      </OrderSelect>
      <OrderRadio>
        <label htmlFor="ASC">
          <input
            type="radio"
            name="comparison"
            value="ASC"
            id="ASC"
            data-testid="column-sort-input-asc"
            checked={ keys.comparison === 'ASC' }
            onChange={ handleChange }
          />
          Ascendente
        </label>
        <label htmlFor="DESC">
          <input
            type="radio"
            name="comparison"
            value="DESC"
            id="DESC"
            data-testid="column-sort-input-desc"
            checked={ keys.comparison === 'DESC' }
            onChange={ handleChange }
          />
          Descendente
        </label>
      </OrderRadio>
      <button data-testid="column-sort-button" onClick={ handleSubmit } type="button">
        Ordenar
      </button>
    </OrderContainer>
  );
};

export default Order;
