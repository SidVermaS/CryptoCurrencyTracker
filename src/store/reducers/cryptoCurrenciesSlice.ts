import { createSlice, current } from '@reduxjs/toolkit';
import { CryptoCurrenciesStateI } from '../../types/store/cryptoCurrencies';
import { fetchCryptoCurrencies } from '../thunks/currencies';
import { MAX_RECENTLY_SEARCHED_CRYPTO_CURRENCIES_LIMIT } from '../../consts/cryptoCurrencies';

const initialState: CryptoCurrenciesStateI = {
  searchedText: '',
  cryptoCurrencies: [],
  isLoadingCryptoCurrencies: false,
  errorCryptoCurrencies: null,
  recentlySearchedCryptoCurrencies: [],
  cryptoCurrenciesForAutocomplete: []
};
export const cryptoCurrenciesSlice = createSlice({
  name: 'cryptoCurrencies',
  initialState,
  reducers: {
    addRecentlySearchedCryptoCurrency: (state, action) => {

      // id of the searched crypto currency
      const id = action.payload

      // Searches for the crypto currency in our list whose id is matching
      const searchedCryptoCurrency = current(state.cryptoCurrencies).find(
        (item) => item.id === id,
      );

      // If the crypto currency is available in our list then we'll push the searchedCryptoCurrency to the recentlySearchedCryptoCurrencies
      if (searchedCryptoCurrency) {
        const alreadyExistingIndex = current(state.recentlySearchedCryptoCurrencies).findIndex(
          (item) => item.id === id,
        )
        if (alreadyExistingIndex !== -1) {
          state.recentlySearchedCryptoCurrencies.splice(alreadyExistingIndex, 1)
        }
        (state.recentlySearchedCryptoCurrencies).unshift(searchedCryptoCurrency)
      }
      // If the recentlySearchedCryptoCurrencies exceeds the maximum limit then we'll pop the last item
      if (state.recentlySearchedCryptoCurrencies?.length
        > MAX_RECENTLY_SEARCHED_CRYPTO_CURRENCIES_LIMIT) {
        state.recentlySearchedCryptoCurrencies.pop()
      }
      state.searchedText = ''
      state.cryptoCurrenciesForAutocomplete = []
    },
    updateAutocompleteForCryptoCurrencies: (state, action) => {
      const isFocused = action.payload;
      if (isFocused) {
        state.cryptoCurrenciesForAutocomplete = state.recentlySearchedCryptoCurrencies
      } else {
        // state.cryptoCurrenciesForAutocomplete = []
        // state.searchedText = ''
      }
    },
    resetCryptoCurrencies: (state) => {
      state.isLoadingCryptoCurrencies = false;
      state.cryptoCurrencies = [];
      state.errorCryptoCurrencies = null;
    },
    resetCryptoCurrenciesForAutocomplete: (state) => {
      state.cryptoCurrenciesForAutocomplete = [];
    },
    resetSearchedCryptoCurrencies: (state) => {
      state.recentlySearchedCryptoCurrencies = [];
    },
    searchCryptoCurrency: (state, action) => {
      state.searchedText = String(action.payload)
      const searchedText: string = String(action.payload).toLowerCase();
      // Filter CryptoCurrencies if the searchedText exists in id, name & symbol
      const filteredCryptoCurrencies = state.cryptoCurrencies.filter(
        (cryptoCurrency) =>
          [
            (cryptoCurrency.id.toLowerCase()).includes(searchedText),
            (cryptoCurrency.name.toLowerCase()).includes(searchedText),
            (cryptoCurrency.symbol.toLowerCase()).includes(searchedText),
          ].includes(true),
      );
      // Update the cryptoCurrenciesForAutocomplete to be rendered in the autocomplete component
      state.cryptoCurrenciesForAutocomplete = filteredCryptoCurrencies;
    },
    resetSearchedText: (state,) => {
      state.searchedText = ''
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCryptoCurrencies.pending, (state) => {
        state.isLoadingCryptoCurrencies = true;
        state.errorCryptoCurrencies = null;
      })
      .addCase(fetchCryptoCurrencies.fulfilled, (state, action) => {
        state.isLoadingCryptoCurrencies = false;
        state.cryptoCurrencies = action.payload;
      })
      .addCase(fetchCryptoCurrencies.rejected, (state, action) => {
        state.isLoadingCryptoCurrencies = false;
        state.errorCryptoCurrencies = action.error.message;
      });
  },
});

export const { addRecentlySearchedCryptoCurrency, updateAutocompleteForCryptoCurrencies,
  resetCryptoCurrencies,
  searchCryptoCurrency, resetCryptoCurrenciesForAutocomplete,
  resetSearchedText
} = cryptoCurrenciesSlice.actions;
export default cryptoCurrenciesSlice.reducer;
