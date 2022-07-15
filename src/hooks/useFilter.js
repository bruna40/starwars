import { useContext } from 'react';
import PlanetContext from '../context/PlanetContext';

const number = -1;

const useFilter = () => {
  const { data, input, setBody, arrayFiltered, body } = useContext(PlanetContext);

  const filterByName = () => {
    const nome = data
      .filter((planet) => planet.name.includes(input));
    setBody(nome);
  };
  const filterByCategories = () => {
    const DECIMAL_NUMBER = 10;
    if (arrayFiltered.length > 0) {
      arrayFiltered.forEach((item) => {
        const retorno = body.filter((category) => {
          const { column, comparison, value } = item;
          switch (comparison) {
          case 'igual a':
            return category[column] === value;
          case 'maior que':
            return Number(category[column], DECIMAL_NUMBER) > value;
          case 'menor que':
            return Number(category[column], DECIMAL_NUMBER) < value;
          default:
            return false;
          }
        });
        setBody(retorno);
      });
    } else {
      setBody(data);
    }
  };

  const dataSort = () => {
    data.sort((a, b) => {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return number;
      }
      return 0;
    });
    setBody(data);
  };
  return { filterByName, filterByCategories, dataSort };
};

export default useFilter;
