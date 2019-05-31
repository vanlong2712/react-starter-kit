import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from '@reach/router';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './store/index';
import { ActionProvier } from './action';

import './index.css';

const App = React.lazy(() => import('./components/App'));

const HomePage = React.lazy(() => import('./components/HomePage'));

const FavPage = React.lazy(() => import('./components/FavPage'));

ReactDOM.render(
  <React.Suspense fallback={<div>Loading...</div>}>
    <StoreProvider>
      <ActionProvier>
        <Router>
          <App path="/">
            <HomePage path="/" />
            <FavPage path="/faves" />
          </App>
        </Router>
      </ActionProvier>
    </StoreProvider>
  </React.Suspense>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
