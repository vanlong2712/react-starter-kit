import React from 'react';

import { initialStateEpisode, episodeReducer } from '../reducer/episode';

export const Store = React.createContext();

export function StoreProvider(props) {
  const [state, dispatch] = React.useReducer(episodeReducer, initialStateEpisode);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
