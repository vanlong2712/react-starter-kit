import React, { useState, useEffect, useMemo } from 'react';
import { Store } from '../store/index';
import { Action } from '../action/index';

import { consoleLog } from '../utils/Utils';

const EpisodesList = React.lazy(() => import('./EpisodesList'));

const HomePage = () => {
  const [count, setCount] = useState(0);
  const { episodeRd } = React.useContext(Store);
  const { fetchDataAction, toggleFavAction } = React.useContext(Action);

  const onHandleClick = () => {
    setCount(count + 1);
  };
  const props = {
    episodes: episodeRd.episodes,
    toggleFavAction,
    favourites: episodeRd.favourites,
  };

  useEffect(() => {
    if (episodeRd.episodes.length === 0) {
      fetchDataAction();
    }
  }, []);

  consoleLog('Render: HomePage');
  return (
    <React.Fragment>
      Count: {count}
      <button onClick={onHandleClick}>Click</button>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
};

export default HomePage;
