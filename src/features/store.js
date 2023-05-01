/**
 * Base on
 * Redux: https://redux.js.org/
 * React-Redux: https://react-redux.js.org/
 */

import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/ui';

/** @param {import('./@features').FeaturesStorage} _storage */
export default function createStore() {
  // console.log('Create store');
  // console.log(storage);
  return configureStore({
    reducer: {
      ui: uiReducer,
    },
  });
}
