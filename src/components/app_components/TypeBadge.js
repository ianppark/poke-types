import React from 'react';
import styled from 'styled-components';
import { typeColors } from '../utilities';

const TypeBadge = ({ type }) => {
  return <StyledBadge type={type}>{type.toUpperCase()}</StyledBadge>;
};

const StyledBadge = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
  background: ${props => typeColors[props.type]};
  padding: 1px 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border-radius: 10px;
  margin: 0 3px;
`;

export default TypeBadge;
