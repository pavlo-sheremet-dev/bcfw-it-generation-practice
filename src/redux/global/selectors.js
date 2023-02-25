import { globalSlice } from './slice';

export const selectThemeSwitcher = state => state[globalSlice.name].themeTitle;
export const selectShowMobileMenu = state =>
  state[globalSlice.name].showMobileMenu;
