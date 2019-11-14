import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Header from './components/app_components/Header';
import MainContainer from './components/app_components/MainContainer';
import PokeTypeState from './context/poketypes/PokeTypesState';

function App() {
  return (
    <PokeTypeState>
      <AppGrid>
        <Header />
        <MainContainer />
        <GlobalStyle />
      </AppGrid>
    </PokeTypeState>
  );
}

const AppGrid = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-rows: 1fr 8fr 1fr;
  grid-template-areas:
    'header'
    'main'
    'footer';
  height: 100vh;
`;
export default App;
