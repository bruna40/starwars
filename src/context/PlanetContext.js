import React, { createContext, useEffect, useState } from 'react';
import propTypes from 'prop-types';

export const PlanetsContext = createContext();
PlanetsContext.displayName = 'Planeta';

const PlanetsProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [body, setBody] = useState([]);
  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [arrayFiltered, setArrayFiltered] = useState([]);

  const AdicionarFiltros = (keys) => {
    setArrayFiltered((prevState) => [...prevState, { ...keys }]);
  };

  useEffect(() => {
    fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then((infos) => {
        const planets = infos.results.map((planet) => {
          delete planet.residents;
          return planet;
        });
        setData(planets);
      });
  }, []);

  return (
    <PlanetsContext.Provider
      value={ {
        data,
        setData,
        setInput,
        input,
        setFilter,
        filter,
        arrayFiltered,
        setArrayFiltered,
        setBody,
        body,
        AdicionarFiltros,
      } }
    >
      {children}
    </PlanetsContext.Provider>
  );
};

export default PlanetsProvider;

PlanetsProvider.propTypes = {
  children: propTypes.node.isRequired,
};
