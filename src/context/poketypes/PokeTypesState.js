import React, { useReducer } from 'react';
import PokeTypeContext from './pokeTypeContext';
import PokeTypeReducer from './pokeTypeReducer';
import { LOAD_POKETYPES } from '../types';
import axios from 'axios';

const PokeTypeState = props => {
  const initialState = {
    pokeTypes: {},
    currentType: 'normal'
  };

  const [state, dispatch] = useReducer(PokeTypeReducer, initialState);

  const loadPokeTypes1 = async () => {
    const response = await fetch('https://pokeapi.co/api/v2/type/');
    const results = await response.json();
    const pokeTypesArr = await results.results;
    const pokeTypes = {};

    pokeTypesArr.forEach(async pokeType => {
      const typeResponse = await fetch(pokeType.url);
      const typeResults = await typeResponse.json();
      const typeInfo = await typeResults.damage_relations;
      pokeTypes[pokeType.name] = {
        attack: {
          superEffective: typeInfo.double_damage_to.map(type => type.name),
          notVeryEffective: typeInfo.half_damage_to.map(type => type.name),
          noEffect: typeInfo.no_damage_to.map(type => type.name)
        },
        defense: {
          superEffective: typeInfo.double_damage_from.map(type => type.name),
          notVeryEffective: typeInfo.half_damage_from.map(type => type.name),
          noEffect: typeInfo.no_damage_from.map(type => type.name)
        }
      };
    });

    dispatch({
      type: LOAD_POKETYPES,
      payload: pokeTypes
    });
  };

  const loadPokeTypes = () => {
    const pokeTypes = {};

    axios.get('https://pokeapi.co/api/v2/type/').then(res1 => {
      res1.data.results.forEach(pokeType => {
        axios.get(pokeType.url).then(res2 => {
          const dmgRelations = res2.data.damage_relations;
          pokeTypes[pokeType.name] = {
            attack: {
              superEffective: dmgRelations.double_damage_to.map(
                type => type.name
              ),
              notVeryEffective: dmgRelations.half_damage_to.map(
                type => type.name
              ),
              noEffect: dmgRelations.no_damage_to.map(type => type.name)
            },
            defend: {
              superEffective: dmgRelations.double_damage_from.map(
                type => type.name
              ),
              notVeryEffective: dmgRelations.half_damage_from.map(
                type => type.name
              ),
              noEffect: dmgRelations.no_damage_from.map(type => type.name)
            }
          };
        });
      });
    });

    dispatch({
      type: LOAD_POKETYPES,
      payload: pokeTypes
    });
  };

  return (
    <PokeTypeContext.Provider
      value={{
        pokeTypes: state.pokeTypes,
        loadPokeTypes,
        currentType: state.currentType
      }}
    >
      {props.children}
    </PokeTypeContext.Provider>
  );
};

export default PokeTypeState;
