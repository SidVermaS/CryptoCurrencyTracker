import { createSlice } from "@reduxjs/toolkit";
import { CurrenciesStateI, } from "../../types/store/currencies";
import { fetchCryptoCurrencies } from "../thunks/currencies";
import { fiatCurrencies } from "../../assets/data/fiatCurrencies";

const initialState: CurrenciesStateI = {
  cryptoCurrencies: [],
  isLoadingCryptoCurrencies: false,
  errorCryptoCurrencies: null, fiatCurrencies:fiatCurrencies, selectedFiatCurrency: fiatCurrencies[0],
}
export const currenciesSlice = createSlice({
  name: 'currencies',
  initialState,
  reducers: {
    resetCryptoCurrencies: (state) => {
      state.isLoadingCryptoCurrencies = false;
      state.cryptoCurrencies = [];
      state.errorCryptoCurrencies = null;
    },
    selectFiatCurrency: (state, action) => {
      // Searches for the fiat currency in our list whose id is matching
      const selectedFiatCurrency = state.fiatCurrencies.find((item) => item.id === action.payload)
      // If the fiat currency is available in our list then we'll update selectedFiatCurrency
      if (selectedFiatCurrency) {
        state.selectedFiatCurrency = selectedFiatCurrency;        
      }
    },
    resetFiatCurrencies: (state) => {
      state.selectedFiatCurrency = fiatCurrencies[0];
    },
    resetCurrencies: (state) => {
      currenciesSlice.caseReducers.resetCryptoCurrencies(state);
      currenciesSlice.caseReducers.resetFiatCurrencies(state);
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCryptoCurrencies.pending, (state) => {
      state.isLoadingCryptoCurrencies = true;
      state.errorCryptoCurrencies = null
    }).addCase(fetchCryptoCurrencies.fulfilled, (state, action) => {
      state.isLoadingCryptoCurrencies = false;
      state.cryptoCurrencies = action.payload
    }).addCase(fetchCryptoCurrencies.rejected, (state, action) => {
      state.isLoadingCryptoCurrencies = false;
      state.errorCryptoCurrencies = action.error.message;
    })
  }
})

export const { resetCryptoCurrencies } = currenciesSlice.actions
export default currenciesSlice.reducer