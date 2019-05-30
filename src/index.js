import React from 'react';
import ReactDOM from 'react-dom';

import { Router } from '@reach/router';
import * as serviceWorker from './serviceWorker';
import { StoreProvider } from './store/index';

import './index.css';
import { ActionProvier } from './action';

const App = React.lazy(() => import('./container/App'));

const HomePage = React.lazy(() => import('./container/HomePage'));

const FavPage = React.lazy(() => import('./container/FavPage'));

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
