import React from 'react';
import { consoleLog } from '../utils/Utils';
import EpisodeItem from './EpisodeItem';

const EpisodesList = ({ episodes, toggleFavAction, favourites }) => {
  consoleLog('Render: EpisodesList');
  return episodes.map((episode, index) => {
    return (
      <EpisodeItem
        key={index}
        episode={episode}
        favourites={favourites}
        toggleFavAction={toggleFavAction}
      />
    );
  });
};

export default EpisodesList;
