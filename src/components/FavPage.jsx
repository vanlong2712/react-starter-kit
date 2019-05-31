import React, { useContext, useEffect } from 'react';
import { Store } from '../store/index';
import { Action } from '../action';
import { goTo } from '../utils/Utils';

const EpisodesList = React.lazy(() => import('./EpisodesList'));
export default function FavPage() {
  const { episodeRd } = useContext(Store);
  const { toggleFavAction } = useContext(Action);

  useEffect(() => {
    if (episodeRd.favourites.length === 0) {
      goTo('/');
    }
  }, [episodeRd]);

  const props = {
    episodes: episodeRd.favourites,
    toggleFavAction,
    favourites: episodeRd.favourites,
  };
  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <div className="episode-layout">
        <EpisodesList {...props} />
      </div>
    </React.Suspense>
  );
}
