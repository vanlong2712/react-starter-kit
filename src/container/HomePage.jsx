import React from 'react';
import { Store } from '../store/index';
import { Action } from '../action/index';

const EpisodesList = React.lazy(() => import('./EpisodesList'));

export default function HomePage() {
  const { episodeRd } = React.useContext(Store);
  const { fetchDataAction, toggleFavAction } = React.useContext(Action);

  const props = {
    episodes: episodeRd.episodes,
    toggleFavAction,
    favourites: episodeRd.favourites,
  };

  React.useEffect(() => {
    episodeRd.episodes.length === 0 && fetchDataAction();
  });

  return (
    <React.Fragment>
      <React.Suspense fallback={<div>Loading...</div>}>
        <section className="episode-layout">
          <EpisodesList {...props} />
        </section>
      </React.Suspense>
    </React.Fragment>
  );
}
