import React, { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

export default function Input() {
  const { input, setInput } = useContext(PlanetContext);
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
