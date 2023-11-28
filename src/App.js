import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './styles/global';
import PlanetProvider from './context/PlanetProvider';
import Forms from './components/Forms/index';
import defaultTheme from './styles/themes/default';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <PlanetProvider>
        <header>
          <Header />
        </header>
        <Forms />
      </PlanetProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
