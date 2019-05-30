import React from 'react';
import PropTypes from 'prop-types';
import { Link } from '@reach/router';
import { Store } from '../store/index';
import { consoleLog } from '../utils/Utils';

const App = ({ children }) => {
  const { episodeRd } = React.useContext(Store);

  consoleLog('Render: App');
  return (
    <React.Fragment>
      <header className="header">
        <div>
          <h1>Rick and Morty</h1>
          <p>Pick your favourite episodes</p>
        </div>
        <div>
          <Link to="/">Home</Link>
          <Link to="/faves">Favourite(s) {episodeRd.favourites.length}</Link>
        </div>
      </header>
      {children}
    </React.Fragment>
  );
};

App.propTypes = {
  children: PropTypes.any,
};

export default App;
