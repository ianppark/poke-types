import React, { useReducer } from 'react';
import PokeTypeContext from './pokeTypeContext';
import PokeTypeReducer from './pokeTypeReducer';
import { LOAD_POKETYPES } from '../types';
import axios from 'axios';

const PokeTypeState = props => {
  const initialState = {
    pokeTypes: {}
  };

  const [state, dispatch] = useReducer(PokeTypeReducer, initialState);

  const loadPokeTypes = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/type/');
    const results = await response.json();
    const pokeTypes = await results.results;
    dispatch({
      type: LOAD_POKETYPES,
      payload: pokeTypes
    });
  };

  const fetchPokeTypes = async () => {
    const pokeTypes = {
      fire: 'Fire is good against ice/bug'
    };
    axios
      .get('https://pokeapi.co/api/v2/type')
      .then(res => (pokeTypes.data = res));

    return pokeTypes;
  };

  return (
    <PokeTypeContext.Provider
      value={{
        pokeTypes: state.pokeTypes,
        loadPokeTypes
      }}
    >
      {props.children}
    </PokeTypeContext.Provider>
  );
};

export default PokeTypeState;
