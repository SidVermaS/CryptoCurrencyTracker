import { combineReducers } from '@reduxjs/toolkit';

import cryptoCurrenciesSliceReducer from './cryptoCurrenciesSlice';
import fiatCurrenciesSliceReducer from './fiatCurrenciesSlice';

// Combines all of the reducers in the app in a single constant variable
const rootReducer = combineReducers({
  cryptoCurrencies: cryptoCurrenciesSliceReducer,
  fiatCurrencies: fiatCurrenciesSliceReducer,
});
export default rootReducer;
