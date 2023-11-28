import React, { useContext } from 'react';
import PlanetContext from '../../../context/PlanetContext';
import Button from './style';

const ButtonGeral = () => {
  const { setArrayFiltered, setBody, data } = useContext(PlanetContext);

  const handleDeleteAll = () => {
    setArrayFiltered([]);
    setBody([...data]);
  };
  return (
    <Button type="button" data-testid="button-remove-filters" onClick={ handleDeleteAll }>
      Limpar Filtros
    </Button>
  );
};

export default ButtonGeral;
