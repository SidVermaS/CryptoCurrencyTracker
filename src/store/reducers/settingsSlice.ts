import { createSlice, } from '@reduxjs/toolkit';
import { SettingsStateI, } from '../../types/store/settings';
const initialState: SettingsStateI = {
  theme: 'light',
};
export const settingsSlice = createSlice({
  name: 'settingsSlice',
  initialState,
  reducers: {
    setLightTheme: (state) => {
      state.theme = 'light'
    },
    setDarkTheme: (state) => {
      state.theme = 'dark'
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
  }
});

export const {
  setLightTheme,
  setDarkTheme,
  toggleTheme
} = settingsSlice.actions;
export default settingsSlice.reducer;
