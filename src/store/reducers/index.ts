import { combineReducers } from '@reduxjs/toolkit';

import cryptoCurrenciesSliceReducer from './cryptoCurrenciesSlice';
import fiatCurrenciesSliceReducer from './fiatCurrenciesSlice';
import settingsSliceReducer from './settingsSlice';


// Combines all of the reducers in the app in a single constant variable
const rootReducer = combineReducers({
  cryptoCurrencies: cryptoCurrenciesSliceReducer,
  fiatCurrencies: fiatCurrenciesSliceReducer,
  settings: settingsSliceReducer,
});
export default rootReducer;
