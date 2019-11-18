import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import PokeTypeContext from '../../context/poketypes/pokeTypeContext';

const Header = () => {
  const pokeTypeContext = useContext(PokeTypeContext);
  const { loadPokeTypes } = pokeTypeContext;

  useEffect(() => {
    loadPokeTypes();
    // eslint-disable-next-line
  }, []);

  return (
    <div className='surface sticky-top'>
      <StyledHeader>
        <h1>PokeTypes</h1>
      </StyledHeader>
    </div>
  );
};

const StyledHeader = styled.div`
  background: rgba(255, 255, 255, 0.07);
  display: flex;
  align-items: center;
  justify-content: center;
  grid-area: header;
  height: 100%;
  z-index: 10;
`;

export default Header;
