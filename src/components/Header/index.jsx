import React, { useEffect, useContext } from 'react';
import ButtonDeleteFilter from '../ButtonDeleteFilter';
import ButtonGeral from '../generics/Button';
import Input from '../Input';
import Select from '../Select';
import Order from '../Order';
import PlanetContext from '../../context/PlanetContext';
import useFilter from '../../hooks/useFilter';
import { HeaderContainer, Title } from './style';

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
    <HeaderContainer>
      <Title>
        <h1>Star Wars - Planets search</h1>
        <Input />
      </Title>
      <div>
        <Select />
        {arrayFiltered.length > 0
          && arrayFiltered.map((filt) => (
            <ButtonDeleteFilter id={ filt } key={ filt } nome={ filt } />
          ))}
        <Order />
        <ButtonGeral />
      </div>

    </HeaderContainer>
  );
}
