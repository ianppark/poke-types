import React, { useContext } from 'react';
import styled from 'styled-components';
import TypeBadge from './TypeBadge';
import { typeColors } from '../utilities';
import PokeTypeContext from '../../context/poketypes/pokeTypeContext';

const TypeInfo = () => {
  const pokeTypeContext = useContext(PokeTypeContext);
  const { currentType, pokeTypes } = pokeTypeContext;
  console.log(pokeTypes[currentType]);
  return (
    <StyledTypeInfoSticky>
      <StyledTypeInfoArea>
        <StyledTypeInfoHeader currentType={currentType}>
          <h3>{currentType}</h3>
        </StyledTypeInfoHeader>
        <StyledAttackDefend>
          <h5>Attack</h5>
          <h5>Defend</h5>
        </StyledAttackDefend>
        <StyledTypeInfoDetails area='attack'>
          <p>Super Effective X4</p>
          <StyledBadgeList>
            {/* {pokeTypes[currentType].attack.superEffective.map((type, index) => (
              <TypeBadge key={index} type={type} />
            ))} */}
          </StyledBadgeList>
          <p>Not Very Effective X0.5</p>
          <StyledBadgeList></StyledBadgeList>
          <p>No Effect X0</p>
          <StyledBadgeList></StyledBadgeList>
        </StyledTypeInfoDetails>
        <StyledTypeInfoDetails area='defend'>
          <p>Super Effective X4</p>
          <StyledBadgeList></StyledBadgeList>
          <p>Not Very Effective X0.5</p>
          <StyledBadgeList></StyledBadgeList>
          <p>No Effect X0</p>
          <StyledBadgeList></StyledBadgeList>
        </StyledTypeInfoDetails>
      </StyledTypeInfoArea>
    </StyledTypeInfoSticky>
  );
};

const StyledTypeInfoSticky = styled.div`
  background: #121212;
  position: sticky;
  bottom: 0;
  height: 40vh;
  margin: 0;
  padding: 0;
`;

const StyledTypeInfoArea = styled.div`
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.07);
  display: grid;
  grid-gap: 0;
  grid-template-rows: 20% 10% 70%;
  grid-template-columns: 1fr 1fr;
  grid-template-areas:
    'cur cur'
    'title title'
    'attack defend';
`;

const StyledTypeInfoHeader = styled.div`
  grid-area: cur;
  width: 100%;
  background: ${props => typeColors[props.currentType]};
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const StyledAttackDefend = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  grid-area: title;
`;

const StyledTypeInfoDetails = styled.div`
  border: 1px dotted rgba(255, 255, 255, 0.5);
  grid-area: ${props => props.area};
  margin: 5%;
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    text-decoration: underline;
    font-size: 0.8rem;
  }

  * {
    margin-bottom: 5px;
  }
`;

const StyledBadgeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
`;

export default TypeInfo;
