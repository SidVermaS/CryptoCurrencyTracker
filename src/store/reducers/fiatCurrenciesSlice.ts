import { createSlice } from '@reduxjs/toolkit';
import {
  FiatCurrenciesStateI,
  SelectFiatCurrencyActionI,
} from '../../types/store/fiatCurrencies';
import { fiatCurrencies } from '../../assets/data/fiatCurrencies';

const initialState: FiatCurrenciesStateI = {
  fiatCurrencies: fiatCurrencies,
  selectedFiatCurrency: fiatCurrencies[0],
};
export const fiatCurrenciesSlice = createSlice({
  name: 'fiatCurrencies',
  initialState,
  reducers: {
    selectFiatCurrency: (state, action: SelectFiatCurrencyActionI) => {
      // Searches for the fiat currency in our list whose id is matching
      const selectedFiatCurrency = state.fiatCurrencies.find(
        (item) => item.id === action.payload,
      );
      // If the fiat currency is available in our list then we'll update selectedFiatCurrency
      if (selectedFiatCurrency) {
        state.selectedFiatCurrency = selectedFiatCurrency;
      }
    },
    resetFiatCurrencies: (state) => {
      state.selectedFiatCurrency = fiatCurrencies[0];
    },
  },
});

export const { selectFiatCurrency, resetFiatCurrencies } =
  fiatCurrenciesSlice.actions;
export default fiatCurrenciesSlice.reducer;
