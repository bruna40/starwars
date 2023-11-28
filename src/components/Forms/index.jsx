import React, { useContext, useEffect, useState } from 'react';
import PlanetContext from '../../context/PlanetContext';
import useFilter from '../../hooks/useFilter';
import city from '../../utils/Array';
import { TableContainer, TableList } from './style';

const Forms = () => {
  const {
    data,
    input,
    body } = useContext(PlanetContext);
  const [header, setHeader] = useState([]);
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
      setHeader(Object.keys(data[0]));
      dataSort();
    }
  }, [data]);

  return (
    <TableContainer>
      <TableList>
        <table>
          <thead>
            <tr>
              {header.map((item) => (
                <th key={ item }>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {body.map((item) => (
              <tr key={ item }>
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
      </TableList>
    </TableContainer>
  );
};

export default Forms;
