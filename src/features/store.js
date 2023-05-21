/**
 * Base on
 * Redux: https://redux.js.org/
 * React-Redux: https://react-redux.js.org/
 */

import { configureStore } from '@reduxjs/toolkit';
import uiReducer from './slices/ui';

/** @param {import('../@type/features').FeaturesStorage} storage */
export default function createStore() {
  // console.log(storage);
  return configureStore({
    reducer: {
      ui: uiReducer,
    },
  });
}
