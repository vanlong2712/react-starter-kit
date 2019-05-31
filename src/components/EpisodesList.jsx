import React, { useState } from 'react';
import { consoleLog, deepEqual } from '../utils/Utils';

const EpisodeItem = React.lazy(() => import('./EpisodeItem'));

const EpisodesList = React.memo(
  ({ episodes, toggleFavAction, favourites, hanldeTestDeepObject, test }) => {
    const [count, setCount] = useState(0);

    consoleLog('Render: EpisodesList');
    return (
      <React.Fragment>
        <div>
          <button type="button" onClick={() => setCount(prevCount => prevCount + 1)}>
            Count: {count}
          </button>
          <button type="button" onClick={hanldeTestDeepObject}>
            hanldeTestDeepObject
          </button>
        </div>
        {episodes.map(episode => {
          return (
            <EpisodeItem
              key={episode.id}
              episode={episode}
              favourites={favourites}
              toggleFavAction={toggleFavAction}
            />
          );
        })}
      </React.Fragment>
    );
  },
  (prevProps, nextProps) => {
    return (
      prevProps.episodes === nextProps.episodes && prevProps.favourites === nextProps.favourites
    );
  },
);

export default EpisodesList;
