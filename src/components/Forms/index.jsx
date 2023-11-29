import React, { useContext, useEffect } from 'react';
import PlanetContext from '../../context/PlanetContext';
import useFilter from '../../hooks/useFilter';
import city from '../../utils/Array';
import { TableContainer, TableList } from './style';
import { valuesTable } from '../../utils/KeysFilter';
import SkeletonCard from '../skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Forms = () => {
  const {
    data,
    input,
    body,
  } = useContext(PlanetContext);
  const { filterByName, dataSort } = useFilter();

  useEffect(() => {
    if (input !== '') {
      filterByName();
    } else {
      dataSort();
    }
  }, [input]);

  useEffect(() => {
    if (data.length > 0) {
      dataSort();
    }
  }, [data]);

  return (
    <TableContainer>
      <TableList>
        <table>
          <thead>
            <tr>
              {valuesTable.map((item) => (
                <th key={ item }>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.length > 0 ? body.map((item) => (
              <tr key={ item }>
                {Object.values(item).map((value, chave) => (city.includes(value) ? (
                  <td key={ chave } data-testid="planet-name">
                    {value}
                  </td>
                ) : (
                  <td key={ chave }>{value}</td>
                )))}
              </tr>
            )) : <SkeletonCard /> }
          </tbody>
        </table>
      </TableList>
    </TableContainer>
  );
};

export default Forms;
