import React, { useContext } from 'react';
import propTypes from 'prop-types';
import { PlanetsContext } from '../context/PlanetContext';

const Button = ({ id, nome }) => {
  const { arrayFiltered, setArrayFiltered } = useContext(PlanetsContext);

  const handleSubmit = (index) => {
    const filtered = arrayFiltered;
    filtered.splice(index, 1);
    setArrayFiltered([...filtered]);
  };

  return (
    <div
      data-testid="filter"
    >
      {`${nome.column} ${nome.comparison} ${nome.value}`}
      <button
        type="button"
        data-testid="filter"
        onClick={ () => handleSubmit(id) }
      >
        X
      </button>
    </div>
  );
};

export default Button;

Button.propTypes = {
  id: propTypes.number,
  nome: propTypes.shape({
    column: propTypes.string,
    comparison: propTypes.string,
    value: propTypes.number,
  }),
}.isRequired;
