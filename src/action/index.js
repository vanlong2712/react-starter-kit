import React from 'react';
import types from './action-types';
import { Store } from '../store';

export const Action = React.createContext();

export function ActionProvier(props) {
  const { episodeRd, dispatchEspisode } = React.useContext(Store);

  const fetchDataAction = async () => {
    const data = await fetch(
      'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes',
    );
    const dataJSON = await data.json();
    return dispatchEspisode({
      type: types.FETCH_DATA,
      payload: dataJSON._embedded.episodes,
    });
  };

  const toggleFavAction = episode => {
    const episodeInFavourites = episodeRd.favourites.includes(episode);
    let dispatchObj = {
      type: types.ADD_FAV,
      payload: episode,
    };
    if (episodeInFavourites) {
      const favouritesWithoutEpisode = episodeRd.favourites.filter(fav => fav.id !== episode.id);
      dispatchObj = {
        type: types.REMOVE_FAV,
        payload: favouritesWithoutEpisode,
      };
    }
    return dispatchEspisode(dispatchObj);
  };

  const value = { fetchDataAction, toggleFavAction };
  return <Action.Provider value={value}>{props.children}</Action.Provider>;
}
