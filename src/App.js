import React from 'react';
import styled from 'styled-components';
import GlobalStyle from './GlobalStyle';
import Header from './components/app_components/Header';
import MainContainer from './components/app_components/MainContainer';
import PokeTypeState from './context/poketypes/PokeTypesState';
import TypeInfo from './components/app_components/TypeInfo';

function App() {
  return (
    <PokeTypeState>
      <AppGrid>
        <Header />
        <MainContainer />
        <TypeInfo />
        <GlobalStyle />
      </AppGrid>
    </PokeTypeState>
  );
}

const AppGrid = styled.div`
  display: grid;
  grid-gap: 0;
  grid-template-areas:
    'header'
    'main';
  height: 100vh;
`;
export default App;
