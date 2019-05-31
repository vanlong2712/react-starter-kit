import React from 'react';
import { consoleLog } from '../utils/Utils';

const EpisodeItem = React.memo(({ episode, favourites, toggleFavAction }) => {
  consoleLog('Render: EpisodeItem');
  return (
    <section className="episode-box" key={episode.id}>
      <img src={episode.image && episode.image.medium} alt={`Rick and Morty ${episode.name}`} />
      <div>{episode.name}</div>
      <section style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div>
          Season: {episode.season} Number: {episode.number}
        </div>
        <button type="button" onClick={() => toggleFavAction(episode)}>
          {favourites.find(fav => fav.id === episode.id) ? 'Unfav' : 'Fav'}
        </button>
      </section>
    </section>
  );
});

export default EpisodeItem;
