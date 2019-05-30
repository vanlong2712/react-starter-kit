import React from 'react';

import { initialStateEpisode, episodeReducer } from '../reducer/episode';

export const Store = React.createContext();

export function StoreProvider(props) {
  const [episodeRd, dispatchEspisode] = React.useReducer(episodeReducer, initialStateEpisode);
  const value = { episodeRd, dispatchEspisode };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
