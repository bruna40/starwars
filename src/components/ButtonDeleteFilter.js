import React, { useContext } from 'react';
import propTypes from 'prop-types';
import PlanetContext from '../context/PlanetContext';

const ButtonDeleteFilter = ({ id, nome }) => { // ja passa aqui a props
  const { arrayFiltered, setArrayFiltered } = useContext(PlanetContext);

  const handleSubmit = (filtrado) => {
    const filtered = arrayFiltered;
    filtered.splice(filtrado, 1);
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

ButtonDeleteFilter.propTypes = {
  id: propTypes.number,
  nome: propTypes.shape({
    column: propTypes.string,
    comparison: propTypes.string,
    value: propTypes.number,
  }),
}.isRequired;

export default ButtonDeleteFilter;
