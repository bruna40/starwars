import React, { useEffect, useState } from 'react';
import propTypes from 'prop-types';
import axios from 'axios';
import PlanetContext from './PlanetContext';

const PlanetProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [body, setBody] = useState([]);
  const [filter, setFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
  const [arrayFiltered, setArrayFiltered] = useState([]);
  const [Ordenation, setOrdenation] = useState({
    column: 'population',
    comparison: 'ASC',
  });

  const AdicionarFiltros = (keys) => {
    setArrayFiltered((prevState) => [...prevState, { ...keys }]);
  };

  useEffect(() => {
    // Ordernar por ASC ou DESC
    const numberDesc = -1;
    const numberAsc = 1;
    const arrayOrdenation = [...body];
    if (Ordenation.comparison === 'ASC') {
      const arraySort = arrayOrdenation.sort((a, b) => {
        const aValue = a[Ordenation.column] === 'unknown'// foi feito para colocar os unknown no final
          ? Number(numberAsc)
          : a[Ordenation.column];
        const bValue = b[Ordenation.column] === 'unknown'
          ? Number(numberAsc)
          : b[Ordenation.column];
        return aValue - bValue;
      });
      setBody(arraySort);
    }
    if (Ordenation.comparison === 'DESC') {
      const arraySort = arrayOrdenation.sort((a, b) => {
        const aValue = a[Ordenation.column] === 'unknown'// foi feito para colocar os unknown no final
          ? Number(numberDesc)
          : a[Ordenation.column];
        const bValue = b[Ordenation.column] === 'unknown'
          ? Number(numberDesc)
          : b[Ordenation.column];
        return bValue - aValue;
      });
      setBody(arraySort);
    }
  }, [Ordenation]);

  useEffect(() => {
    axios
      .get('https://swapi.dev/api/planets')
      .then((response) => {
        const planets = response.data.results.map((planet) => {
          delete planet.residents;
          return planet;
        });
        setData(planets);
      })
      .catch((error) => console.log('Erro ao carregar os dados da API', error.message));
  }, []);

  return (
    <PlanetContext.Provider
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
        Ordenation,
        setOrdenation,
        AdicionarFiltros,
      } }
    >
      {children}
    </PlanetContext.Provider>
  );
};
PlanetProvider.propTypes = {
  children: propTypes.node.isRequired,
};

export default PlanetProvider;
