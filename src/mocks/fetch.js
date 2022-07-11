import planetsResponse from './planetsResponse';

export const REQUEST_URL = 'https://swapi-trybe.herokuapp.com/api/planets/';

const mockFetch = () => Promise.resolve({
  json: () => Promise.resolve(planetsResponse),
});

export default mockFetch;
