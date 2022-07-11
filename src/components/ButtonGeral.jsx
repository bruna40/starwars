import React, { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetContext';

const ButtonGeral = () => {
  const { setArrayFiltered, setBody, data } = useContext(PlanetsContext);

  const handleDeleteAll = () => {
    setArrayFiltered([]);
    setBody([...data]);
  };
  return (
    <button type="button" data-testid="button-remove-filters" onClick={ handleDeleteAll }>
      Limpar Filtros
    </button>
  );
};

export default ButtonGeral;
