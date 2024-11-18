export type ThemesI = 'light' | 'dark';
export type SettingsStateI = {
  theme: ThemesI;
};
export type ToggleThemeActionI = {
  payload: ThemesI;
  type: string;
};
