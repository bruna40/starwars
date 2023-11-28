import React, { useEffect, useContext } from 'react';
import ButtonDeleteFilter from '../ButtonDeleteFilter';
import ButtonGeral from '../generics/Button';
import Input from '../Input';
import Select from '../Select';
import Order from '../Order';
import PlanetContext from '../../context/PlanetContext';
import useFilter from '../../hooks/useFilter';

export default function Header() {
  const {
    filter,
    arrayFiltered,
  } = useContext(PlanetContext);

  const { filterByCategories } = useFilter();

  useEffect(() => {
    if (filter.column !== '') {
      filterByCategories();
    } else {
      dataSort();
    }
  }, [arrayFiltered]);
  return (
    <>
      <h1>Star Wars - Planets search</h1>
      <Input />
      <Select />
      {arrayFiltered.length > 0
          && arrayFiltered.map((filt) => (
            <ButtonDeleteFilter id={ filt } key={ filt } nome={ filt } />
          ))}
      <Order />
      <ButtonGeral />
    </>
  );
}
