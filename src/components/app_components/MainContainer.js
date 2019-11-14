import React from 'react';
import styled from 'styled-components';
import TypeButton from './TypeButton';

const MainContainer = () => {
  return (
    <StyledContainer>
      <TypeButton type='normal' />
      <TypeButton type='fighting' />
      <TypeButton type='flying' />
      <TypeButton type='poison' />
      <TypeButton type='ground' />
      <TypeButton type='rock' />
      <TypeButton type='bug' />
      <TypeButton type='ghost' />
      <TypeButton type='steel' />
      <TypeButton type='fire' />
      <TypeButton type='water' />
      <TypeButton type='grass' />
      <TypeButton type='electric' />
      <TypeButton type='psychic' />
      <TypeButton type='ice' />
      <TypeButton type='dragon' />
      <TypeButton type='dark' />
      <TypeButton type='fairy' />
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  z-index: -1;
`;

export default MainContainer;
