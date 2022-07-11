import React, { useContext, useEffect, useState } from 'react';
import Button from './Button';
import ButtonGeral from './ButtonGeral';
import Input from './Input';
import Select from './Select';
import { PlanetsContext } from '../context/PlanetContext';
import useFilter from '../hooks/useFilter';
import city from '../utils/Array';

const Forms = () => {
  const {
    data,
    input,
    filter,
    arrayFiltered,
    body } = useContext(PlanetsContext);
  const [header, setHeader] = useState([]);
  const { filterByCategories, filterByName, dataSort } = useFilter();

  useEffect(() => {
    if (input !== '') {
      filterByName();
    } else {
      dataSort();
    }
  }, [input]);

  useEffect(() => {
    if (filter.column !== '') {
      filterByCategories();
    } else {
      dataSort();
    }
  }, [arrayFiltered]);

  useEffect(() => {
    if (data.length > 0) {
      setHeader(Object.keys(data[0]));
      dataSort();
    }
  }, [data]);

  return (
    <div>
      <h1>Forms</h1>
      <Input />
      <Select />
      {arrayFiltered.length > 0
        && arrayFiltered.map((item, index) => (
          <Button id={ index } key={ index } nome={ item } />
        ))}
      <ButtonGeral />
      <table>
        <thead>
          <tr>
            {header.map((item, index) => (
              <th key={ index }>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {body.map((item, index) => (
            <tr key={ index }>
              {Object.values(item).map((value, chave) => (city.includes(value) ? (
                <td key={ chave } data-testid="planet-name">
                  {value}
                </td>
              ) : (
                <td key={ chave }>{value}</td>
              )))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Forms;
