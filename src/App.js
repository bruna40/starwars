import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import PlanetProvider from './context/PlanetProvider';
import Forms from './components/Forms';
import defaultTheme from './styles/themes/default';

function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <PlanetProvider>
        <Forms />
      </PlanetProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
