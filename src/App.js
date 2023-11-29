import React from 'react';
import { ThemeProvider } from 'styled-components';
import { SkeletonTheme } from 'react-loading-skeleton';
import GlobalStyle from './styles/global';
import PlanetProvider from './context/PlanetProvider';
import Forms from './components/Forms/index';
import defaultTheme from './styles/themes/default';
import Header from './components/Header';

function App() {
  return (
    <ThemeProvider theme={ defaultTheme }>
      <PlanetProvider>
        <Header />
        <SkeletonTheme color="#202020" highlightColor="#444">
          <Forms />
        </SkeletonTheme>
      </PlanetProvider>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
