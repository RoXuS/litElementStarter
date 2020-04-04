import { combineReducers, createStore, compose } from 'redux';
import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer';

/* For redux dev tools */
/* eslint no-underscore-dangle: off */
const devCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default createStore(
  (state) => state,
  devCompose(lazyReducerEnhancer(combineReducers)),
);
