import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetContext';

export default function Input() {
  const { input, setInput } = useContext(PlanetsContext);
  const handleChange = ({ target: { value } }) => {
    setInput(value);
  };
  return (
    <div>
      <input
        type="text"
        data-testid="name-filter"
        value={ input }
        onChange={ handleChange }
      />
    </div>
  );
}
