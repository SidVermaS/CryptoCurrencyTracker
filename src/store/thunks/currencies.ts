import { createAsyncThunk } from '@reduxjs/toolkit';
import { CryptoCurrencyI } from '../../types/store/cryptoCurrencies';
import { getCryptoCurrencies } from '../../services/cryptoCurrencyTracker';
import { RootStateI } from '../store';

export const fetchCryptoCurrencies = createAsyncThunk<CryptoCurrencyI[], void>(
  'cryptoCurrencies/fetchAll',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState() as RootStateI;
    const response = await getCryptoCurrencies({
      vs_currency: state.fiatCurrencies.selectedFiatCurrency.id,
    });
    if (response?.error) {
      throw response?.error;
    }
    return response.data! as CryptoCurrencyI[];
  },
);
