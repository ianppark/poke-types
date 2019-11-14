import { LOAD_POKETYPES } from '../types';

export default (state, action) => {
  switch (action.type) {
    case LOAD_POKETYPES:
      return {
        ...state,
        pokeTypes: action.payload
      };
    default:
      return state;
  }
};
