import { useContext } from 'react';
import { PlanetsContext } from '../context/PlanetContext';
import { NUMBER_ORDER_ASC, NUMBER_ORDER_DESC } from '../utils/numbersUtils';

const useFilter = () => {
  const { data, input, setBody, arrayFiltered, body } = useContext(PlanetsContext);

  const filterByName = () => {
    const nome = data
      .filter((planet) => planet.name.toLowerCase().includes(input.toLowerCase()));
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
        return NUMBER_ORDER_ASC;
      }
      if (a.name < b.name) {
        return NUMBER_ORDER_DESC;
      }
      return 0;
    });
    setBody(data);
  };
  return { filterByName, filterByCategories, dataSort };
};

export default useFilter;
