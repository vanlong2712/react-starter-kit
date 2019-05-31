import types from '../action/action-types';
import { deepClone } from '../utils/Utils';

export const initialStateEpisode = {
  episodes: [],
  favourites: [],
  test: {
    a: {
      b: {
        c: 0,
      },
    },
  },
};

export function episodeReducer(state, action) {
  const newState = Object.assign({}, state);
  const data = action.payload;
  let temp;
  switch (action.type) {
    case types.FETCH_DATA:
      newState.episodes = data;
      return newState;
    case types.ADD_FAV:
      temp = deepClone(newState.favourites);
      temp.push(data);
      newState.favourites = temp;
      return newState;
    case types.REMOVE_FAV:
      newState.favourites = data;
      return newState;
    case types.TEST_CHANGE_DEEP_OBJECT:
      temp = deepClone(newState.test);
      temp.a.b.c = new Date().getTime();
      newState.test = temp;
      console.log('newState', newState.test);
      return newState;
    default:
      return newState;
  }
}
