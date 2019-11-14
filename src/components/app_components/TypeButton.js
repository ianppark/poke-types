import React from 'react';
import styled from 'styled-components';

const TypeButton = ({ type }) => {
  return <StyledTypeButton type={type}>{type}</StyledTypeButton>;
};

const StyledTypeButton = styled.button`
  background: ${props => TypeColors[props.type]};
  color: white;
  border: none;
  padding: 5px 5%;
  min-height: 28px;
  font-size: 1.2rem;
  border-radius: 15px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

const TypeColors = {
  normal: '#a8a878',
  fighting: '#c03028',
  flying: '#a890f0',
  poison: '#a040a0',
  ground: '#a8b820',
  rock: '#b8a038',
  bug: '#a8b820',
  ghost: '#68a090',
  steel: '#44685e',
  fire: '#f08030',
  water: '#6890f0',
  grass: '#78c850',
  electric: '#f8d030',
  psychic: '#f85888',
  ice: '#98d8d8',
  dragon: '#ee99ac',
  dark: '#705848',
  fairy: '#ee99ac'
};

export default TypeButton;
