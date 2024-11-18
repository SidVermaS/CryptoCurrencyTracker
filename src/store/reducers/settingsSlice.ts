import { createSlice, } from '@reduxjs/toolkit';
import { SettingsStateI, ToggleThemeActionI, } from '../../types/store/settings';
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
    setSpecificTheme: (state, action: ToggleThemeActionI) => {
      state.theme = action.payload
    },
    toggleTheme: (state) => {
      state.theme = state.theme === 'light' ? 'dark' : 'light'
    },
  }
});

export const {
  setLightTheme,
  setDarkTheme,
  toggleTheme, setSpecificTheme
} = settingsSlice.actions;
export default settingsSlice.reducer;
