import { createSlice } from '@reduxjs/toolkit';

export const colorsKeys = {
  LIGHT: 'light',
  DARK: 'dark',
};

const initialState = {
  themeTitle: colorsKeys.LIGHT,
  showMobileMenu: false,
};

export const globalSlice = createSlice({
  name: 'global',
  initialState,
  reducers: {
    switchTheme: state => {
      state.themeTitle =
        state.themeTitle === colorsKeys.LIGHT
          ? colorsKeys.DARK
          : colorsKeys.LIGHT;
    },
    toggleMobileMenu: state => {
      state.showMobileMenu = !state.showMobileMenu;
    },
  },
});

export const { switchTheme, toggleMobileMenu, changeLanguage } =
  globalSlice.actions;
