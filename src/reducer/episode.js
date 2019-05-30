import types from '../action/action-types';

export const initialStateEpisode = {
  episodes: [],
  favourites: [],
};

export function episodeReducer(state, action) {
  const newState = Object.assign({}, state);
  const data = action.payload;
  switch (action.type) {
    case types.FETCH_DATA:
      newState.episodes = data;
      return newState;
    case types.ADD_FAV:
      newState.favourites.push(data);
      return newState;
    case types.REMOVE_FAV:
      newState.favourites = data;
      return newState;
    default:
      return newState;
  }
}
