import React from 'react';
import styled from 'styled-components';
import { typeColors } from '../utilities';

const TypeButton = ({ type }) => {
  return <StyledTypeButton type={type}>{type}</StyledTypeButton>;
};

const StyledTypeButton = styled.button`
  background: ${props => typeColors[props.type]};
  width: 40%;
  height: 45px;
  color: white;
  border: none;
  min-height: 28px;
  font-size: 1.2rem;
  border-radius: 15px;
  text-transform: uppercase;
  margin-bottom: 10px;
`;

export default TypeButton;
