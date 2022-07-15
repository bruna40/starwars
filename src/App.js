import React from 'react';
import PlanetProvider from './context/PlanetProvider';
import Forms from './components/Forms';

function App() {
  return (
    <PlanetProvider>
      <Forms />
    </PlanetProvider>
  );
}

export default App;
